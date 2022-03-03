
import React from 'react'
import styles from './logo.module.less'
import logo from '@/assets/imgs/ant.svg'

const Logo = ( props ) => {
  return (
    <div className={styles.logoContanier}>
      <img className={styles.img} src={logo} alt='logo' />
      <span className={`${styles.name} ${styles.name1}`}>A</span>
      <span className={`${styles.name} ${styles.name2}`}>nt </span>
      <span className={`${styles.name} ${styles.name1}`}>D</span>
      <span className={`${styles.name} ${styles.name2}`}>esign</span>
    </div>
  )
}

export default Logo
