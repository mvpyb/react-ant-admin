
import React from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import NavBar from './components/navbar'
import Main from './components/main'
import SlideBar from './components/sidebar'
import TagsView from './components/tagsView'
import Settings from './components/settings'
// eslint-disable-next-line no-unused-vars
import RightPanel from '@/components/RightPanel'

import { Scrollbars } from 'react-custom-scrollbars'
import styles from './index.module.less'

const BaseLayout = ( props ) => {
  console.log( 'BaseLayout', { ...props } )
  const { tagsView, showSettings } = props

  // const rightSettings = () => {
  //   if ( showSettings ) {
  //     return (
  //       <RightPanel setting={ <Settings /> }></RightPanel>
  //     )
  //   } else {
  //     return null
  //   }
  // }

  return (
    <div className={styles.layoutSection}>
      <Layout style={{ minHeight : '100vh' }}>

        <SlideBar />

        <Layout className={'layoutScrollWrapper'}>
          <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            autoHeightMin={200}
            thumbMinSize={30}
            universal={false}
          >

            <NavBar />

            {tagsView ? <TagsView /> : null}

            <Main />

            <RightPanel showSettings={showSettings} setting={ <Settings /> }></RightPanel>

          </Scrollbars>
        </Layout>

      </Layout>
    </div>
  )
}

export default connect( ( state ) => state.settings )( BaseLayout )
