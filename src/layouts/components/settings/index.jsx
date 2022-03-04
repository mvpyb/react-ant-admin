
import React from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Switch } from 'antd'
import { TOGGLE_TAGS_VIEW, TOGGLE_SIDEBAR_LOGO, TOGGLE_FIX_HEADER } from '@/store/reducers/settings'
import styles from './index.module.less'

const Settings = ( props ) => {
  const { tagsView, fixedHeader, sidebarLogo } = props
  const dispatch = useDispatch()

  const toggleTagsView = ( e ) => {
    dispatch( TOGGLE_TAGS_VIEW() )
  }

  const toggleFixedHeader = ( e ) => {
    dispatch( TOGGLE_FIX_HEADER() )
  }

  const toggleSideBarLogo = ( e ) => {
    dispatch( TOGGLE_SIDEBAR_LOGO() )
  }

  return (
    <div className={ styles.drawerContainer }>
      <div>

        <h3 className={styles.drawerTitle}>系统布局配置</h3>

        {/* <div className={ styles.drawerItem }>
          <span>Theme Color</span>
           <theme-picker style="float: right;height: 26px;margin: -3px 8px 0 0;" @change="themeChange" />
        </div>*/}

        <div className={ styles.drawerItem }>
          <span>开启 TagsView</span>
          <Switch checked={ tagsView } onChange={toggleTagsView} className={styles.drawerSwitch} />
        </div>

        <div className={ styles.drawerItem }>
          <span>固定 Header</span>
          <Switch checked={ fixedHeader } onChange={toggleFixedHeader} className={styles.drawerSwitch} />
        </div>

        <div className={ styles.drawerItem }>
          <span>侧边栏 Logo</span>
          <Switch checked={ sidebarLogo } onChange={toggleSideBarLogo} className={styles.drawerSwitch} />
        </div>

      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ...state.settings
  }
}
export default connect( mapStateToProps )( Settings )

