
import React from 'react'
// import { Redirect, Link, useNavigate } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import { Alert } from 'antd'

const Page404 = ( props ) => {
  return (
    <DocumentTitle title={'404'}>
      <div>
        <Alert
          message='404 Error'
          description='您的页面丢失了'
          type='error'
          closable
        />
      </div>
    </DocumentTitle>
  )
}

export default Page404
