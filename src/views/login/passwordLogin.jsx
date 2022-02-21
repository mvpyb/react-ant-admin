
import React from 'react'

import { useDispatch } from 'react-redux'
import { getUserInfoSlice, SET_TOKEN } from '@store/reducers/users'

import './index.less'

import { validPhone } from '@/utils/validate'
import { localStorageHandle } from '@utils/storages'
import { login } from '@api/login'

import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
const { Item } = Form

const PasswordLogin = ( props ) => {
  const dispatch = useDispatch()

  const trigger = ['onChange', 'onBlur']
  // 这个是rules自定义的验证方法
  const checkAccount = value => {
    if ( !value ) {
      return {
        pass : false,
        message : '账号格式错误'
      }
    } else if ( !validPhone( value ) ) {
      // return {
      //   pass : false,
      //   message : '账号格式错误'
      // }
      return {
        pass : true
      }
    } else {
      return {
        pass : true
      }
    }
  }
  const rules = {
    username : [
      {
        validator : ( rule, value ) => {
          try {
            const validate = checkAccount( value )
            if ( validate && validate.pass ) {
              return Promise.resolve()
            } else {
              return Promise.reject( validate.message || '账号格式错误' )
            }
          } catch ( e ) {
            return Promise.reject( e )
          }
        }
      }
    ],
    password : [
      {
        required : true,
        message : '请输入密码'
      },
      {
        type : 'string',
        min : 8
      },
      {
        type : 'string',
        max : 16
      }
    ]
  }
  let initialValues = {
    remember : true,
    username : 'admin',
    password : 'password'
  }
  const itemConfig = {
    colon : false, //
    hidden : false //
  }

  const formRef = React.createRef()

  // 初始话登录信息 => 是否记住密码
  const initLogin = () => {
    const loginInfo = localStorageHandle.get( 'login_info' )
    if ( loginInfo && loginInfo.remember ) {
      const { username, password } = loginInfo
      initialValues = {
        remember : true,
        username,
        password
      }
    } else {
      initialValues = {
        remember : false,
        username : '',
        password : ''
      }
    }
  }
  initLogin()

  const onFinish = async values => {
    const { username, password, remember } = values
    const { loginStart, loginSuccess, loginFailed, loginComplete } = props
    loginStart && loginStart()
    if ( remember ) {
      // 保存本地
      localStorageHandle.set( 'login_info', {
        username,
        password,
        remember : true,
        expiration : new Date().valueOf() + ( 7 * 24 * 60 * 60 * 1000 ) // 有效期 7 天
      } )
    } else {
      // 删除登录信息
      localStorageHandle.remove( 'login_info' )
    }

    // 发送登录请求
    try {
      const response = await login( {
        username,
        password
      } )
      const { code, data } = response
      if ( code == 200 ) {
        await dispatch( SET_TOKEN( data.token ) )
        const payload = await dispatch( getUserInfoSlice() ).unwrap()
        loginSuccess && loginSuccess( payload )
      }
    } catch ( error ) {
      loginFailed && loginFailed( error )
    } finally {
      loginComplete && loginComplete()
    }
  }

  const handleLogin = () => {
    formRef.current.submit()
  }

  const onFinishFailed = error => {
    // const { values, errorFields, outOfDate } = error
    console.log( 'onFinishFailed', error )
  }

  const onFieldsChange = ( changedFields, allFields ) => {
    // console.log('onFieldsChange', changedFields, allFields );
  }

  const onValuesChange = ( changedValues, allValues ) => {
    // console.log('onValuesChange', changedValues, allValues );
  }

  return (
    <Form
      ref={ formRef }
      name='passwordLogin'
      className='login-form'
      scrollToFirstError={ true }
      validateTrigger={ trigger }
      initialValues={ initialValues }
      onFinish={ onFinish }
      onFinishFailed={ onFinishFailed }
      onFieldsChange={ onFieldsChange }
      onValuesChange={ onValuesChange }
    >
      <Item name='username' rules={ rules.username } { ...itemConfig } >
        <Input
          allowClear={true}
          maxLength={11}
          prefix={<UserOutlined className='site-form-item-icon' />}
          placeholder='username'
        />
      </Item>
      <Item name='password' rules={ rules.password } { ...itemConfig } >
        <Input
          maxLength={16}
          prefix={<LockOutlined className='site-form-item-icon' />}
          type='password'
          placeholder='Password'
          onPressEnter={ handleLogin }
        />
      </Item>
      <Item>
        <Item name='remember' valuePropName='checked' noStyle>
          <Checkbox>记住密码</Checkbox>
        </Item>
        <a className='login-form-forgot' href=''>
          忘记密码
        </a>
      </Item>
      <Item>
        <Button type='primary' htmlType={ 'submit' } className='login-form-button' >登录</Button>
      </Item>

      <Item>
        账号 ： admin ， 密码 ：password
      </Item>
    </Form>
  )
}

export default PasswordLogin
