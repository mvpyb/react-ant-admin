
import React from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'

import NavBar from './components/navbar'
import Main from './components/main'
import SlideBar from './components/sidebar'

const { Header, Footer, Sider } = Layout

const BaseLayout = ( props ) => {
  return (

    <Layout style={{ minHeight : '100vh' }}>
      <SlideBar />
      <Layout>
        <NavBar />

        <Main />

      </Layout>
    </Layout>

  /* <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>
          <div>content</div>
          <Outlet />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>*/
  )
}

export default BaseLayout
