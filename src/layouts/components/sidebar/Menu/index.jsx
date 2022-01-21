
import React, { useState, useEffect } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import { connect } from 'react-redux'
// import { useDispatch } from 'react-redux'
// import { asyncPermissionRoutes } from '@store/reducers/permission'

import { Menu } from 'antd'
import MenuItem from './menuItem'

import './index.less'

const SideMenu = ( props ) => {
  console.log( 'menu', { ...props } )

  const { addRoutes : menuList } = props
  const [collapsed, setCollapsed] = useState( false )

  return (
    <div className={'side-menu-section'}>
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeightMin={200}
        thumbMinSize={30}
        universal={false}>
        <div className={''}>

          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode='inline'
            theme='dark'
            inlineCollapsed={collapsed}
          >
            <MenuItem menuList={menuList}/>

            {/* { menuList &&
            menuList.map( ( route, index ) =>
              <MenuItem key={route.path + index} item={route} basePath={route.path} />
            )}*/}

          </Menu>

        </div>
      </Scrollbars>
    </div>
  )
}

export default connect( ( state ) => state.permission )( SideMenu )
// export default connect( ( state ) => {
//   return {
//     routes : state.permission.routes
//   }
// } )( SideMenu )

