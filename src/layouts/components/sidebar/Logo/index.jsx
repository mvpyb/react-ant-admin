
import React from 'react'
import logo from '@imgs/ant.svg'
import './index.less'

const Logo = () => {
  return (
    <div className='sidebar-logo-wrapper'>
      <img src={logo} className='sidebar-logo' alt='logo' />
      <h1 className='sidebar-title'>React-Ant-Admin</h1>
    </div>
  )
}

export default Logo
