
import React from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import Logo from './Logo'
import Menu from './Menu'
const { Sider } = Layout

const LayoutSider = ( props ) => {
  const { sidebarLogo, sidebarStatus } = props

  return (
    <Sider
      trigger={null}
      collapsible
      className={ 'sidebar-section' }
      collapsed={sidebarStatus}
      style={{ zIndex : '10' }}
    >
      {sidebarLogo ? <Logo /> : null}
      <Menu />
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
