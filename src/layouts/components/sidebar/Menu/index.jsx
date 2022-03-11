
import React, { useEffect } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Menu } from 'antd'
import { UPDATE_TAGS, SET_DEFAULT_TAGS } from '@/store/reducers/tagsView'
import MenuItem from './menuItem'
import styles from './index.module.less'

const SideMenu = ( props ) => {
  const {
    addRoutes : menuList,
    routes : routeLists,
    allRedirects,
    dispatch,
    tags,
    layoutMode,
    mode = 'inline',
    theme = 'dark'
  } = props
  const location = useLocation()
  const currentPath = location.pathname

  // 现根据 key 去查找 allRedirects，获取完整的 path
  const findRealPath = ( key ) => {
    const result = allRedirects.find( v => v.path === key )
    return result && result.redirect ? result.redirect : key
  }

  const filterTags = ( routes, key, tag = [] ) => {
    routes.forEach( item => {
      const { children, path, redirect } = item
      if ( key == path && !tag.find( v => v.path == path ) ) {
        if ( redirect && children && children.length > 0 ) {
          const obj = children.find( v => v.path == redirect )
          tag.push( {
            ...obj
          } )
        } else {
          tag.push( {
            ...item
          } )
        }
      }

      if ( children && children.length > 0 ) {
        filterTags( children, key, tag )
      }
    } )
    return tag
  }

  const findAffixTags = ( routes, tag = [] ) => {
    routes.forEach( item => {
      const { children, affix } = item
      if ( affix === true ) {
        tag.push( {
          ...item,
          unRemove : true
        } )
      }
      if ( children && children.length > 0 ) {
        findAffixTags( children, tag )
      }
    } )
    return tag
  }

  const onSelect = menu => {
    const { key } = menu
    const realPath = findRealPath( key )
    const menuItem = filterTags( routeLists, realPath, [...tags] )
    dispatch( UPDATE_TAGS( menuItem ) )
  }

  const initTags = async() => {
    const affixTags = findAffixTags( routeLists, [] )
    const defaultTags = [
      {
        path : '/dashboard/index',
        title : '首页'
      }
    ]
    // 如果固定现实的tags为空，则默认添加首页
    const fixTags = affixTags.length > 0 ? affixTags : defaultTags

    const realPath = findRealPath( currentPath )
    const menuItem = filterTags( routeLists, realPath, [...fixTags] )
    await dispatch( UPDATE_TAGS( menuItem ) )
    await dispatch( SET_DEFAULT_TAGS( fixTags ) )
  }

  const MenuBar = () => {
    return (
      <div>
        <Menu
          className={''}
          mode={ mode }
          theme={ theme }
          onSelect={onSelect}
        >
          {
            MenuItem( menuList )
          }
        </Menu>
      </div>
    )
  }

  const VerticalScrollBar = ( { children } ) => {
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

  useEffect( () => {
    initTags()
  }, [currentPath] )

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
    ...state.tagsView,
    ...state.permission
  }
}

export default connect( mapStateToProps )( SideMenu )
