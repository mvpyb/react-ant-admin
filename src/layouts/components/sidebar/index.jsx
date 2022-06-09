
import React from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Layout } from 'antd'
import Logo from './Logo'
import Menus from './Menu'
const { Sider } = Layout

const LayoutSider = ( props ) => {
  const { sidebarLogo, sidebarStatus } = props
  const location = useLocation()
  const [initPath, setInitPath] = React.useState( '' )

  React.useEffect( () => {
    setInitPath( location.pathname )
  }, [] )

  return (
    <Sider
      trigger={null}
      collapsible
      className={ 'sidebar-section' }
      collapsed={sidebarStatus}
      style={{ zIndex : '10' }}
    >
      { sidebarLogo ? <Logo /> : null }
      {
        initPath ? <Menus initPath={ initPath } /> : null
      }

    </Sider>
  )
}

const mapStateToProps = ( state ) => {
  return {
    ...state.app,
    ...state.settings
  }
}
export default connect( mapStateToProps )( LayoutSider )
