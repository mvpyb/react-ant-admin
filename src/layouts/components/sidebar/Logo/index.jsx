
import React from 'react'
import logo from '@/assets/imgs/ant.svg'
import styles from './index.module.less'

const Logo = () => {
  return (
    <div className={ styles.sidebarLogoWrapper }>
      <img src={logo} className={ styles.sidebarLogo } alt='logo' />
      <h1 className={ styles.sidebarTitle }>React-Ant-Admin</h1>
    </div>
  )
}

export default Logo
