
import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { Scrollbars } from 'react-custom-scrollbars'

import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { asyncPermissionRoutes } from '@store/reducers/permission'

import { Menu } from 'antd'
const { SubMenu, Item } = Menu

import './index.less'

import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined
} from '@ant-design/icons'

const SideMenu = ( props ) => {
  console.log( 'menuItem', { ...props } )

  const { menuList, item, basePath } = props
  const [onlyOneChild, setOnlyOneChild] = useState( null )

  const hasOneShowingChild = ( route = [] ) => {
    console.log( 'hasOneShowingChild', route )

    const { children } = route

    console.log( 'children', children )

    if ( !children || !children.length ) {
      return true
    }

    const showingChildren = children.filter( item => {
      if ( item.hidden ) {
        return false
      } else {
        // // Temp set(will be used if only has one showing child)
        // setOnlyOneChild( item )
        return true
      }
    } )

    console.log( 'showingChildren', showingChildren )

    // When there is only one child router, the child router is displayed by default
    if ( showingChildren.length === 1 ) {
      return true
    }

    // Show parent if there are no child router to display
    if ( showingChildren.length === 0 ) {
      // setOnlyOneChild( { ... route, path : '', noShowingChildren : true } )
      return true
    }
    console.log( 'test' )

    return false
  }

  const WrappedLink = ( { to, ...rest } ) => {
    return <Link to={to} {...rest} />
  }

  return (
    <>
      { menuList &&
      menuList.map( ( item, index ) =>
        // ( hasOneShowingChild( item ) && ( !onlyOneChild.children || onlyOneChild.noShowingChildren ) && !item.alwaysShow )
        hasOneShowingChild( item )
          ? (
            <Item key={item.path}>
              {item.icon}
              <WrappedLink to={item.path}>{item.title}</WrappedLink>
            </Item>
          )
          : (
            <SubMenu key={item.path} title={item.name} icon={item.icon}>
              {item.children &&
                  item.children.map( ( child, cIndex ) => (
                    <Item key={child.path}>
                      <WrappedLink to={child.path}>{child.title}</WrappedLink>
                    </Item>
                  ) )}
            </SubMenu>
          )
      )}

      {/*  { menuList &&
      menuList.map( ( item, index ) =>
        item.children ? (
          <SubMenu key={item.path + index} title={item.name} icon={item.icon}>
            {item.children &&
                item.children.map( ( child, cIndex ) => (
                  <Item key={child.path + cIndex}>
                    <WrappedLink to={child.path}>{child.title}</WrappedLink>
                  </Item>
                ) )}
          </SubMenu>
        ) : (
          <Item key={item.path + index}>
            {item.icon}
            <WrappedLink to={item.path}>{item.title}</WrappedLink>
          </Item>
        )
      )}*/}

      {/* {
        ( hasOneShowingChild( item.children, item ) && ( !onlyOneChild.children || onlyOneChild.noShowingChildren ) && !item.alwaysShow )
          ? (
            <Item key={item.path}>
              {item.icon}
              <WrappedLink to={item.path}>{item.title}</WrappedLink>
            </Item>
          )
          : (
            <SubMenu key={item.path} title={item.name} icon={item.icon}>
              {item.children &&
                  item.children.map( ( child, cIndex ) => (
                    <Item key={child.path + cIndex}>
                      <WrappedLink to={child.path}>{child.title}</WrappedLink>
                    </Item>
                  ) )}
            </SubMenu>
          )

      }*/}

      <Menu.Item key='1' icon={<PieChartOutlined />}>
        Option 1
      </Menu.Item>
      <Menu.Item key='2' icon={<DesktopOutlined />}>
        Option 2
      </Menu.Item>
      <Menu.Item key='3' icon={<ContainerOutlined />}>
        Option 3
      </Menu.Item>
      <SubMenu key='sub1' icon={<MailOutlined />} title='Navigation One'>
        <Menu.Item key='5'>Option 5</Menu.Item>
        <Menu.Item key='6'>Option 6</Menu.Item>
        <Menu.Item key='7'>Option 7</Menu.Item>
        <Menu.Item key='8'>Option 8</Menu.Item>
      </SubMenu>
      <SubMenu key='sub2' icon={<AppstoreOutlined />} title='Navigation Two'>
        <Menu.Item key='9'>Option 9</Menu.Item>
        <Menu.Item key='10'>Option 10</Menu.Item>
        <SubMenu key='sub3' title='Submenu'>
          <Menu.Item key='11'>Option 11</Menu.Item>
          <Menu.Item key='12'>Option 12</Menu.Item>
        </SubMenu>
      </SubMenu>
    </>
  )
}

export default SideMenu
