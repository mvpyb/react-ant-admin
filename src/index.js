import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import './icons'
import "antd/dist/antd.less"
import "@/styles/index.less"
import "./mock"

const render = () => {
  ReactDOM.render(
      <App />,
      document.getElementById( 'root' )
  )
}

render()

// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./App', render)
// }
