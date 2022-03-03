
import React from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { loginOut } from '@/store/reducers/users'
import FullScreen from '@/components/FullScreen'
import Hamburger from '@/components/Hamburger'
import { subStringStr } from '@/utils/filters'
import {
  Menu, Dropdown, Modal, Layout, Avatar
} from 'antd'
import styles from './index.module.less'

import { CaretDownOutlined, UserOutlined } from '@ant-design/icons'

const { Header } = Layout

const NavBar = ( props ) => {
  const { avatar, username, sidebarStatus, fixedHeader } = props

  const dispatch = useDispatch()

  const menuClick = ( { key } ) => {
    switch ( key ) {
      case 'logout':
        Modal.confirm( {
          title : '登出',
          content : '确定要退出系统吗?',
          okText : '确定',
          cancelText : '取消',
          onOk : () => {
            dispatch( loginOut() )
          }
        } )
        break
      default:
        break
    }
  }

  const menu = (
    <Menu onClick={menuClick} className={ styles.userInfo }>
      <Menu.Item key='dashboard'>
        {username}
      </Menu.Item>

      <Menu.Divider />
      <Menu.Item key='logout'>登出</Menu.Item>
    </Menu>
  )

  return (
    // <div className={`nav-bar-section ${!sidebarStatus ? 'open-slide' : 'close-slide'}`}>
    <div className={`${styles.navBarSection} ${!sidebarStatus ? '' : styles.closeSlide}`}>

      {fixedHeader ? <Header /> : null}

      <Header className={ fixedHeader ? styles.fixHeader : ''}>

        <Hamburger />

        <div className={ styles.rightMenu }>
          <FullScreen />
          <div className={ styles.dropdownWrap }>
            <Dropdown overlay={menu}>
              <div>
                <Avatar size={40} icon={<UserOutlined/> } src={avatar} className={ styles.avatarWrapper } />

                <span className={ styles.username } >{ subStringStr( username, 3 ) }</span>

                <CaretDownOutlined style={{ color : 'rgba(0,0,0,.3)' }}/>
              </div>
            </Dropdown>
          </div>
        </div>
      </Header>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    ...state.users,
    ...state.app,
    ...state.settings
  }
}
export default connect( mapStateToProps )( NavBar )

