
import React from 'react'
import { Link } from 'react-router-dom'

import './index.less'

import { getFullKey } from '@/router/utils'
import { isArray, isExternal } from '@/utils/validate'
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
    return isExternal( to )
  }

  const renderMenu = ( lists, callback ) => {
    if ( !lists || !lists.length || !isArray( lists ) ) {
      return null
    }

    return lists.map( item => {
      const CustomSvg = () => (
        item.icon ? <SvgIcon iconClass={ item.icon } className={ 'menu-icon' } /> : null
      )

      // eslint-disable-next-line no-unused-vars
      const { hidden, children, title, path } = item
      const fullKey = getFullKey( item )

      if ( !hidden ) {
        // 判断children是否至少有一个有效的 ( hidden == false .length > 0)
        const hasEffectChildren = hasEffectChild( children, item )
        const effectChildren = !!( children && children.length && isArray( children ) )

        if ( effectChildren && hasEffectChildren && !onlyOneChild.noShowingChildren ) {
          return (
            <SubMenu
              className={ `sub-menu-section ${item.icon ? 'has-icon' : 'no-icon'}` }
              key={ fullKey }
              title={ title }
              icon={ <Icon component={ CustomSvg } /> }
              /* title={
                <div className={ 'menu-title-section' }>
                  { item.icon ? <SvgIcon iconClass={ item.icon } className={ 'menu-icon' } /> : null }
                  <span className={ 'menu-title' }>{ title }</span>
                </div>
              }*/
            >
              { renderMenu( children, callback ) }
            </SubMenu>
          )
        }
        return (
          <Item
            className={ `menu-item-section ${item.icon ? 'has-icon' : 'no-icon'}` }
            key={ fullKey }
            onClick={() => callback( item ) }
            title={ title }
            icon={ <Icon component={ CustomSvg } /> }
          >
            {
              isLink( item.fullPath )
                ? ( <a href={ item.fullPath } target={ '_blank' } rel='noreferrer'> { title } </a> )
                : (
                  <Link to={ item.fullPath }>
                    { title }
                  </Link>
                )
            }

          </Item>
        )
      }
      return < React.Fragment key={ fullKey } />
    } )
  }

  // TODO 路由跳转
  const menuClick = item => {
    // console.log( 'menuClick', { ...item })
    // const menuList = menuList
  }

  return renderMenu( menuList, menuClick )
}

export default MenuItem
