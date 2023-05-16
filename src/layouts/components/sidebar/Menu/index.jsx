
import React, { useEffect, useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import styles from './index.module.scss'
import { isArray, isExternal } from '@/utils/validate'
import SvgIcon from '@/components/SvgIcon'

const SideMenu = (props) => {
  const {
    addRoutes: menuList,
    // routes : routeLists,
    layoutMode,
    initPath = '',
    mode = 'inline',
    theme = 'dark'
  } = props

  const [defaultOpenKeys, setDefaultOpenKeys] = useState([])
  const [selectedKeys, setSelectedKeys] = useState([])

  useEffect(() => {
    initActiveMenu()
  }, [])

  // 获取所有的 path 集合
  // eslint-disable-next-line no-unused-vars
  const getOpenKeysFromMenuData = (menuData) => {
    return (menuData || []).reduce((pre, item) => {
      if (item.path) {
        pre.push(item.path)
      }
      if (item.children) {
        const newArray = pre.concat(getOpenKeysFromMenuData(item.children) || [])
        return newArray
      }
      return pre
    }, [])
  }

  // 递归routerList，设置label children 等
  const changeRoutes = (routers = []) => {
    if (!routers || !routers.length) {
      return null
    }
    const list = routers.filter(v => v.title)
    return list.map((item) => {
      const { children } = item
      const obj = {
        ...item,
        label: menuLink(item.path, item.title || item.label),
        key: item.path,
        icon: item.icon ? <SvgIcon iconClass={ item.icon } /> : null
      }

      const { has, onlyOneChild } = hasEffectChild(children, item, {})

      // 如果 children 存在并且 noShowingChildren !== true, 则递归处理children
      // 否则 删除children，并重置父级label
      if (has && !onlyOneChild.noShowingChildren) {
        obj.label = item.title || item.label
        obj.children = changeRoutes(children)
      } else {
        obj.label = menuLink(onlyOneChild.path, onlyOneChild.title || onlyOneChild.label)
        obj.icon = onlyOneChild.icon ? <SvgIcon iconClass={ onlyOneChild.icon } /> : null
        delete obj.children
      }
      return obj
    })
  }

  // 初始化需展开的导航 和 高亮当前路径的导航
  const initActiveMenu = () => {
    const rank = initPath.split('/')
    const len = rank.length

    // 其中 openMenus 存储当前选中的路径，是个数组
    //
    // 而 selectedOpenMenus 存储的是当前要打开的路径，如果当前选中三级菜单节点，
    // 那么这个打开的路径就应该是['一级菜单节点路径'，'二级菜单节点路径']。
    // 依次类推。
    //
    // 这里需要注意的是使用split("/")函数时，我的路径是以"/"开头的，
    // 所以即便是二级菜单，那么它对应的长度应该是3，而不是二，
    // 当然你也可以将null或者"'删除之后，保留和菜单对应的层级数。
    //
    // 当然还有种简单的方法 ： 每次点击时，获取当前选中的和当前打开的，然后保存到本地
    // todo ： 此方法有小问题， 比方说保存本地后 用户清除了本地存储，然后刷新页面，就不会正常打开和高亮导航了

    const openMenus = [initPath]
    const selectedOpenMenus = []
    const index = len - 2
    if (len > 0) {
      for (let i = 0; i < index + 1; i++) {
        if (i < index) {
          selectedOpenMenus.push(rank.slice(0, i + 2).join('/'))
        }
      }
    }
    setSelectedKeys(openMenus)
    setDefaultOpenKeys(selectedOpenMenus)
  }

  const VerticalScrollBar = ({ children }) => {
    return (
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeightMin={200}
        thumbMinSize={30}
        universal={false}
      >
        {
          children
        }
      </Scrollbars>
    )
  }

  const hasEffectChild = (children = [], parent, onlyOneChild = {}) => {
    if (!children || !isArray(children) || !children.length) {
      return {
        has: false,
        onlyOneChild: {
          ...parent,
          noShowingChildren: true
        }
      }
    }
    const showingChildren = children.filter(v => !v.hidden)
    // 如果没有要显示的子路由器，则显示parent
    // eslint-disable-next-line no-param-reassign
    onlyOneChild = showingChildren.length > 0 ? { ...showingChildren[0] } : {
      ...parent,
      path: parent.redirect || children[0].redirect || children[0].path,
      noShowingChildren: true
    }
    return {
      has: true,
      onlyOneChild
    }
  }

  const isLink = (to) => {
    return isExternal(to) || !(to.startsWith('/'))
  }

  const menuLink = (url, title) => {
    if (isLink(url)) {
      return <a href={ url } target={ '_blank' } rel='noreferrer'> { title } </a>
    } else {
      return <Link to={ url }> { title } </Link>
    }
  }

  const MenuBar = () => {
    // null || [...]
    const list = changeRoutes(menuList)
    const newList = list ? [...changeRoutes(menuList)] : []

    return (
      <div>
        <Menu
          theme={ theme }
          mode={ mode }
          defaultOpenKeys={ defaultOpenKeys }
          defaultSelectedKeys={ selectedKeys }
          items={ newList }
        />
      </div>
    )
  }

  return (
    <div className={styles.sideMenuSection}>
      {
        layoutMode === 'vertical'
          ? (
            <VerticalScrollBar>
              <MenuBar />
            </VerticalScrollBar>
          )
          : <MenuBar />
      }

    </div>
  )
}

const mapStateToProps = state => {
  return {
    ...state.settings,
    ...state.permission
  }
}

export default connect(mapStateToProps)(SideMenu)
