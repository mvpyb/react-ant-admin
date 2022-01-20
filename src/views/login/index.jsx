import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import DocumentTitle from 'react-document-title'
import './index.less'

import { Spin } from 'antd'

import Logo from './logo'
import PasswordLogin from './passwordLogin'
// import SvgIcon from '@/components/SvgIcon'

const Login = ( props ) => {
  // console.log( 'LoginLogin', props.username )
  const [loading, setLoading] = useState( false )
  const navigate = useNavigate()

  const loginStart = () => {
    setLoading( true )
  }

  const loginSuccess = async() => {
    navigate( '/' )
  }
  const loginFailed = () => {}

  return (
    <DocumentTitle title={'用户登录'}>
      <div className='login-container syNormal un-select'>
        <div className={'body fix-width'}>
          <div className={'top'}>
            <Logo className='logos' />
            <div className='desc'>影创科技 - 中后台模板</div>
          </div>
          <div className='main'>
            <Spin spinning={loading} tip='登录中...'>
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

export default Login
// export default connect( ( state ) => state.users )( Login )
