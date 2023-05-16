
import React from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { loginOut } from '@/store/reducers/users'
import { subStringStr } from '@/utils/filters'
import { Menu, Dropdown, Modal, Layout, Avatar, Typography } from 'antd'
import { CaretDownOutlined, UserOutlined } from '@ant-design/icons'
import logo from '@/assets/imgs/ant.svg'
import MenuBar from '../sidebar/Menu'
import FullScreen from '@/components/FullScreen'
import Hamburger from '@/components/Hamburger'
import styles from './index.module.scss'

const { Header } = Layout
const { Text } = Typography

const NavBar = (props) => {
  const {
    avatar, username, sidebarStatus, layoutMode,
    theme = 'light'
    // fixedHeader
  } = props

  const dispatch = useDispatch()

  const menuClick = (key) => {
    switch (key) {
      case 'logout':
        Modal.confirm({
          title: '登出',
          content: '确定要退出系统吗?',
          okText: '确定',
          cancelText: '取消',
          onOk: () => {
            dispatch(loginOut())
          }
        })
        break
      default:
        break
    }
  }

  const Logo = () => {
    return (
      <div className={ styles.horizontalLogo }>
        <img src={logo} className={ styles.horizontalLogoImg } alt='logo' />
        <h1 className={ styles.horizontalLogoTitle }>React-Ant-Admin</h1>
      </div>
    )
  }

  const HorizontalMenu = () => {
    const location = useLocation()
    const [initPath, setInitPath] = React.useState('')

    React.useEffect(() => {
      setInitPath(location.pathname)
    }, [])
    return (
      <div className={ styles.horizontalMenuSection }>
        {
          initPath ? <MenuBar initPath={ initPath } mode={ 'horizontal' } theme={ theme } /> : null
        }
      </div>
    )
  }

  const items = [
    { label: <Text type={ 'danger' }> { username }</Text>, key: 'dashboard' },
    { type: 'divider' },
    { label: <Text onClick={() => menuClick('logout')} > 登出 </Text>, key: 'logout' }
  ]

  return (
    // <div className={`nav-bar-section ${!sidebarStatus ? 'open-slide' : 'close-slide'}`}>
    <div className={`${styles.navBarSection} ${!sidebarStatus ? '' : styles.closeSlide}`}>
      <Header className={ `${styles.headerSection}`}>
        <div className={styles.logoSection}>
          {
            layoutMode !== 'horizontal' ? <Hamburger /> : <Logo />
          }
        </div>
        {
          layoutMode !== 'vertical' ? <HorizontalMenu /> : null
        }
        <div className={ styles.rightMenu }>
          <FullScreen />
          <div className={ styles.dropdownWrap }>
             <Dropdown menu={{ items }} trigger={['hover']} overlayStyle={{ textAlign: 'center' }}>
              <div>
                <Avatar size={40} icon={ <UserOutlined/> } src={avatar} className={ styles.avatarWrapper } />
                <span className={ styles.username } >{ subStringStr(username, 3) }</span>
                <CaretDownOutlined style={{ color: 'rgba(0,0,0,.3)' }}/>
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
export default connect(mapStateToProps)(NavBar)

