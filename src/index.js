import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import reportWebVitals from './reportWebVitals'

import './icons'
import 'antd/dist/reset.css'
import '@/styles/index.scss'
import './mock'

const render = () => {
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    // <StrictMode>
    <App />
    // </StrictMode>
  )
}

render()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', render)
}

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
