import React from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'

const { Header, Footer, Sider, Content } = Layout

const BaseLayout = ( props ) => {
  return (
    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>
          <div>content</div>
          <Outlet />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  )
}

export default BaseLayout
