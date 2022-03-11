
import React from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import NavBar from './components/navbar'
import Main from './components/main'
import SlideBar from './components/sidebar'
import TagsView from './components/tagsView'
import Settings from './components/settings'
import RightPanel from '@/components/RightPanel'
import { Scrollbars } from 'react-custom-scrollbars'
import styles from './index.module.less'

const BaseLayout = ( props ) => {
  const {
    tagsView, showSettings, layoutMode, fixedHeader, sidebarStatus
  } = props

  return (
    <div className={styles.layoutSection}>
      <Layout style={{ minHeight : '100vh' }}>
        {
          layoutMode !== 'horizontal' ? <SlideBar /> : null
        }
        <Layout className={ `layoutScrollWrapper ${layoutMode}Mode` }>
          <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            autoHeightMin={200}
            thumbMinSize={30}
            universal={false}
          >
            {/* 顶部导航*/}
            <div
              className={
                `${styles[layoutMode]} ${styles.navBarContainer} ${fixedHeader ? styles.fixHeader : ''} ${sidebarStatus ? '' : styles.openSlider}`
              }
            >
              <NavBar />
              {tagsView ? <TagsView /> : null}
            </div>

            {/* main content*/}
            <Main />

            <RightPanel showSettings={showSettings} setting={ <Settings /> } />
          </Scrollbars>
        </Layout>
      </Layout>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ...state.app,
    ...state.settings
  }
}
export default connect( mapStateToProps )( BaseLayout )
