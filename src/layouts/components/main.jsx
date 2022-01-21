
import React from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'

const { Content } = Layout

const BaseLayout = ( props ) => {
  return (
    <Content>
      main

      <Outlet></Outlet>
    </Content>
  )
}

export default BaseLayout
