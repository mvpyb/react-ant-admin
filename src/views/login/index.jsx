import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import DocumentTitle from 'react-document-title'
import './index.less'

import { Spin } from 'antd'

import Logo from './logo'
import PasswordLogin from './passwordLogin'

const Login = ( { t } ) => {
  const [loading, setLoading] = useState( false )
  const navigate = useNavigate()

  const loginStart = () => {
    setLoading( true )
  }

  const loginSuccess = async() => {
    navigate( '/' )
  }
  const loginFailed = () => {
    // setLoading( false )
  }

  return (
    <DocumentTitle title= {t( 'login.title' )}>
      <div className='login-container syNormal un-select'>
        <div className={'body fix-width'}>
          <div className={'top'}>
            <Logo className='logos' />
            <div className='desc'> {t( 'login.subTitle' )}</div>
          </div>
          <div className='main'>
            <Spin spinning={loading} tip={ t( 'login.loading' ) }>
              <PasswordLogin
                loginFailed={ loginFailed }
                loginSuccess={ loginSuccess }
                loginStart={ loginStart }
              />
            </Spin>
          </div>
          <div className='footer'>
            <div className='desc'/>
          </div>
        </div>
      </div>
    </DocumentTitle>
  )
}

export default withTranslation()( Login )
