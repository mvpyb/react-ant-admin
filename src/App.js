import React, { Component } from 'react'
// import { HashRouter, MemoryRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import store from './store'
import Router from './router'
import '@/config/il8n'

class App extends Component {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <Provider store={store}>
          <HashRouter>
            <Router />
          </HashRouter>
        </Provider>
      </ConfigProvider>
    )
  }
}

export default App
