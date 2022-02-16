
import React, { useState } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { connect } from 'react-redux'

import { Menu } from 'antd'
import MenuItem from './menuItem'

import './index.less'

const SideMenu = ( props ) => {
  // console.log( 'SideMenu menu', { ...props } )
  const { addRoutes : menuList } = props
  const [openKeys, setOpenKeys] = useState( [] )

  // TODO 如果需要实现Element的 unique-opened（ 是否只保持一个子菜单的展开 ）， 需要获取与所有的key
  const allSubmenuKeys = []

  const onOpenChange = keys => {
    const latestOpenKey = keys.find( key => openKeys.indexOf( key ) === -1 )
    if ( allSubmenuKeys.indexOf( latestOpenKey ) === -1 ) {
      setOpenKeys( keys )
    } else {
      setOpenKeys( latestOpenKey ? [latestOpenKey] : [] )
    }
  }

  return (
    <div className={'side-menu-section'}>
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeightMin={200}
        thumbMinSize={30}
        universal={false}
      >
        <div className={'side-menu-wrapper'}>
          <Menu
            className={''}
            mode='inline'
            theme='dark'
            openKeys={openKeys}
            onOpenChange={onOpenChange}
          >
            {
              MenuItem( menuList )
            }
          </Menu>
        </div>
      </Scrollbars>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ...state.permission,
    ...state.app
  }
}

export default connect( mapStateToProps )( SideMenu )
