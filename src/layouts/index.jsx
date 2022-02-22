
import React from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'

import NavBar from './components/navbar'
import Main from './components/main'
import SlideBar from './components/sidebar'
import TagsView from './components/tagsView'

import './index.less'

import { Scrollbars } from 'react-custom-scrollbars'

const BaseLayout = ( props ) => {
  // console.log( 'props', props )
  const { tagsView } = props
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
          {tagsView ? <TagsView /> : null}
          <Main />
        </Scrollbars>
      </Layout>

    </Layout>
  )
}

export default connect( ( state ) => state.settings )( BaseLayout )
