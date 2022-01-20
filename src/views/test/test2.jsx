
import React, { useState } from 'react'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'
import { Outlet } from 'react-router-dom'

const Test2 = ( props ) => {
  return (
    <DocumentTitle title={'Test2 页面'}>
      <div className='login-container syNormal un-select'>
        <div className={'body fix-width'}>
          <div className={'top'}>
            <div className='desc'>Test2 页面 无需登录</div>
          </div>
        </div>
        <Outlet />
      </div>
    </DocumentTitle>
  )
}

export default connect( ( state ) => state.users )( Test2 )
