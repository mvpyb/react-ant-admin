
import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { TOGGLE_SIDEBAR } from '@/store/reducers/app'
import { MenuUnfoldOutlined, MenuFoldOutlined, MessageOutlined } from '@ant-design/icons'
import styles from './index.module.less'

const Hamburger = ( props ) => {
  const { sidebarStatus } = props
  const dispatch = useDispatch()

  const toggleClick = () => {
    dispatch( TOGGLE_SIDEBAR() )
  }

  return (
    <div className={styles.hamburgerSection} onClick={toggleClick}>
      <MessageOutlined style={{ fontSize : '30px', color : '#ccc' }} />
      {
        sidebarStatus ? <MenuFoldOutlined className={styles.icons} /> : <MenuUnfoldOutlined className={styles.icons}/>
      }
    </div>
  )
}

export default connect( ( state ) => state.app )( Hamburger )
