
import React from 'react'
import { connect, useDispatch } from 'react-redux'
import './index.less'

import { TOGGLE_SIDEBAR } from '@/store/reducers/app'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

const Hamburger = ( props ) => {
  const { sidebarStatus } = props
  const dispatch = useDispatch()

  const toggleClick = () => {
    dispatch( TOGGLE_SIDEBAR() )
  }

  return (
    <div className='hamburger-section' onClick={toggleClick}>
      {
        sidebarStatus ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />
      }
    </div>
  )
}

export default connect( ( state ) => state.app )( Hamburger )
