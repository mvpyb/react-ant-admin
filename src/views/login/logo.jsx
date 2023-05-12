
import React from 'react'
import styles from './logo.cjs.js'
import logo from '@/assets/imgs/ant.svg'

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img className={styles.img} src={logo} alt='logo' />
      <span className={`${styles.name}`}>A</span>
      <span className={`${styles.name} name2`}>nt </span>
      <span className={`${styles.name}`}>D</span>
      <span className={`${styles.name} name2`}>esign</span>
    </div>
  )
}

export default Logo
