
import React from 'react'
import './logo.less'
import logo from '@imgs/ant.svg'

const Logo = ( props ) => {
  return (
    <div className='logo-contanier'>
      <img src={logo} alt='logo' />
      <span className='name name1'>A</span>
      <span className='name name2'>nt </span>
      <span className='name name1'>D</span>
      <span className='name name2'>esign</span>
    </div>
  )
}

export default Logo
