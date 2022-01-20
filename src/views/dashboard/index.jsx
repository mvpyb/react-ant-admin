
import React from 'react'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'

const Dashboard = ( props ) => {
  console.log( 'Dashboard', props )

  return (
    <DocumentTitle title={'dashboard页面'}>
      <div className='login-container syNormal un-select'>
        <div className={'body fix-width'}>
          <div className={'top'}>
            <div className='desc'>dashboard页面 需登录</div>
          </div>
        </div>
      </div>
    </DocumentTitle>
  )
}

export default connect( ( state ) => state.users )( Dashboard )
