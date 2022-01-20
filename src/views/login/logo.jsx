
import React from 'react'
import './logo.less'
import logo from '@imgs/logo.png'

// import SvgIcon from '@/components/SvgIcon'

const Logo = ( props ) => {
  return (
    <div className='logo-contanier'>
      <img src={logo} alt='logo' />
      <span className='name name1'>S</span>
      <span className='name name2'>hadow Creator</span>
    </div>
  )
}

export default Logo
