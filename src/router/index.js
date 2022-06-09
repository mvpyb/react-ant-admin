
import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { unwrapResult } from '@reduxjs/toolkit'

import store from '@/store'
import { asyncPermissionRoutes } from '@/store/reducers/permission'
import { getUserInfoSlice, CLEAR_USER_INFO } from '@/store/reducers/users'

import DynamicRouter from './dynamicRouter'
import { getCookie } from '@/utils/cookies'

const whiteList = [
  '/login'
]

const addBasicRoutes = async( { dispatch, setRouteList } ) => {
  // 注入基础路由
  await dispatch( asyncPermissionRoutes( [] ) )
  const { permission } = await store.getState()
  const { routes } = permission
  setRouteList( routes )
}

const RouterComponent = ( props ) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const { pathname } = location
  const [routeList, setRouteList] = useState( [] )
  // eslint-disable-next-line no-unused-vars
  let isUnmount = false

  // 路由守卫
  const routeGuard = async() => {
    if ( !isUnmount ) {
      const hasToken = getCookie( 'token' )

      if ( hasToken ) {
        if ( pathname == '/login' ) {
          navigate( '/' )
        } else {
          // 权限判断
          const { users : { roles }} = await store.getState()
          const hasRoles = roles && roles.length > 0
          // let currentRoles = roles
          // 权限为空 则重新获取用户信息
          if ( !hasRoles ) {
            try {
              const payload = await dispatch( getUserInfoSlice() ).unwrap()
              // currentRoles = payload.roles

              // 注入权限路由
              await dispatch( asyncPermissionRoutes( payload.roles ) )
              const { permission } = await store.getState()
              const { routes } = permission
              setRouteList( routes )
            } catch ( e ) {
              // 退出登录
              dispatch( CLEAR_USER_INFO() )
              navigate( '/login' )
              window.location.reload()
            }
          }

          // // 注入权限路由
          // await dispatch( asyncPermissionRoutes( currentRoles ) )
          // const { permission } = await store.getState()
          // const { routes } = permission
          // console.log( '路由守卫', routes )
          // setRouteList( routes )
        }
      } else {
        // debugger
        // 注入基础路由
        await addBasicRoutes( { dispatch, setRouteList } )
        // 设置路由
        if ( whiteList.indexOf( pathname ) === -1 ) {
          navigate( '/login', { replace : true } )
        }
      }
    }
  }
  // useEffect( async() => await routeGuard(), [pathname] )

  useEffect( async() => {
    await routeGuard()
    return () => isUnmount = true
  }, [pathname] )

  return (
    <div>
      <DynamicRouter routes={ routeList } />
    </div>
  )
}

export default RouterComponent

