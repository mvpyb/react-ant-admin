
import React from 'react'
import { Layout } from 'antd'

import NavBar from './components/navbar'
import Main from './components/main'
import SlideBar from './components/sidebar'

import './index.less'

import { Scrollbars } from 'react-custom-scrollbars'

const BaseLayout = ( props ) => {
  return (
    <Layout style={{ minHeight : '100vh' }}>
      <SlideBar />

      <Layout className={'layout-scroll-wrapper'}>
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeightMin={200}
          thumbMinSize={30}
          universal={false}
        >
          <NavBar />
          <Main />
        </Scrollbars>
      </Layout>

    </Layout>
  )
}

export default BaseLayout
