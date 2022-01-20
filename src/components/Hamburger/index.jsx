import React from 'react'
import { connect } from 'react-redux'
import { Icon } from 'antd'
// TODO
// import { toggleSiderBar } from '@/store/actions'
import './index.less'

const Hamburger = ( props ) => {
  // TODO
  // const { sidebarCollapsed, toggleSiderBar } = props
  const { sidebarCollapsed } = props
  return (
    <div className='hamburger-container'>
      {/* // TODO*/}
      {/*  <Icon
        type={sidebarCollapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={toggleSiderBar}
      />*/}
      <Icon
        type={sidebarCollapsed ? 'menu-unfold' : 'menu-fold'}
      />
    </div>
  )
}

// TODO
// export default connect( ( state ) => state.app, { toggleSiderBar } )( Hamburger )
export default Hamburger
