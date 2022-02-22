
import React from 'react'
import { Link } from 'react-router-dom'

import './index.less'

// import { getFullKey } from '@router/utils'
import { isArray, isExternal } from '@utils/validate'
import SvgIcon from '@/components/SvgIcon'

import Icon from '@ant-design/icons'
import { Menu } from 'antd'
const { SubMenu, Item } = Menu

const MenuItem = ( menuList ) => {
  // console.log( 'menuList', menuList )
  let onlyOneChild = null

  const hasEffectChild = ( children = [], parent ) => {
    if ( !children || !isArray( children ) || !children.length ) {
      return false
    }

    const showingChildren = children.filter( item => {
      if ( item.hidden ) {
        return false
      } else {
        // 临时设置
        onlyOneChild = item
        return true
      }
    } )
    // 如果没有要显示的子路由器，则显示parent
    if ( showingChildren.length === 0 ) {
      onlyOneChild = { ...parent, path : '', noShowingChildren : true }
      return true
    }
    return true
  }

  const isLink = ( to ) => {
    return isExternal( to ) || !( to.startsWith( '/' ) )
  }

  const renderMenu = ( lists, callback ) => {
    if ( !lists || !lists.length || !isArray( lists ) ) {
      return null
    }

    return lists.map( item => {
      if ( item.path == '*' ) {
        return null
      }
      const CustomSvg = () => (
        item.icon ? <SvgIcon iconClass={ item.icon } className={ 'menu-icon' } /> : null
      )

      const { hidden, children, title, path } = item
      // const fullKey = getFullKey( item )

      if ( !hidden ) {
        // 判断children是否至少有一个有效的 ( hidden == false .length > 0)
        const hasEffectChildren = hasEffectChild( children, item )
        const effectChildren = !!( children && children.length && isArray( children ) )

        if ( effectChildren && hasEffectChildren && !onlyOneChild.noShowingChildren ) {
          return (
            <SubMenu
              className={ `sub-menu-section ${item.icon ? 'has-icon' : 'no-icon'}` }
              key={ path }
              title={ title }
              icon={ <Icon component={ CustomSvg } /> }
            >
              { renderMenu( children, callback ) }
            </SubMenu>
          )
        }
        return (
          <Item
            className={ `menu-item-section ${item.icon ? 'has-icon' : 'no-icon'}` }
            key={ path }
            onClick={() => callback( item ) }
            title={ title }
            icon={ <Icon component={ CustomSvg } /> }
          >
            {
              isLink( item.path )
                ? ( <a href={ item.path } target={ '_blank' } rel='noreferrer'> { title } </a> )
                : (
                  <Link to={ item.path }>
                    { title }
                  </Link>
                )
            }
          </Item>
        )
      }
      return < React.Fragment key={ path } />
    } )
  }

  // TODO 路由跳转
  const menuClick = item => {}

  return renderMenu( menuList, menuClick )
}

export default MenuItem
