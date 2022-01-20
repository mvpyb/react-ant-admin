
import React from 'react'
// import { Redirect, Link, useNavigate } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import { Alert } from 'antd'

const Page401 = ( props ) => {
  return (
    <DocumentTitle title={'401'}>
      <div>
        <Alert
          message='401 Error'
          description='401  您的页面丢失了'
          type='error'
          closable
        />
      </div>
    </DocumentTitle>
  )
}

export default Page401
