
import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { unwrapResult } from '@reduxjs/toolkit'

import store from '@/store'
import { asyncPermissionRoutes } from '@store/reducers/permission'
import { getUserInfoSlice, CLEAR_USER_INFO } from '@store/reducers/users'

import DynamicRouter from './dynamicRouter'
import { getCookie } from '@utils/cookies'

const whiteList = [
  '/login', '/401', '/404'
]

const addBasicRoutes = async( { dispatch, setRouteList } ) => {
  // 注入基础路由
  await dispatch( asyncPermissionRoutes( [] ) )
  const { permission } = await store.getState()
  const { routes } = permission
  setRouteList( routes )
}

const RouterComponent = ( props ) => {
  // console.log( 'props', { ...props } )
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const { pathname } = location
  const [routeList, setRouteList] = useState( [] )

  // 路由守卫
  const routeGuard = async() => {
    const hasToken = getCookie( 'token' )

    if ( hasToken ) {
      if ( pathname == '/login' ) {
        navigate( '/' )
      } else {
        // 权限判断
        const { users : { roles }} = await store.getState()

        const hasRoles = roles && roles.length > 0
        let currentRoles

        // 权限为空 则重新获取用户信息
        if ( !hasRoles ) {
          try {
            // 首选 unwrap 也可以用 unwrapResult 代替
            const payload = await dispatch( getUserInfoSlice() ).unwrap()
            // const payload = await dispatch( getUserInfoSlice() )
            // console.log( 'unwrapResult', unwrapResult( payload ) )

            currentRoles = payload.roles
          } catch ( e ) {
            // 退出登录
            dispatch( CLEAR_USER_INFO() )
            navigate( '/login' )
            window.location.reload()
          }
        } else {
          currentRoles = roles
        }

        // 注入权限路由
        await dispatch( asyncPermissionRoutes( currentRoles ) )

        const { permission } = await store.getState()
        const { routes } = permission

        setRouteList( routes )
      }
    } else {
      // 注入基础路由
      await addBasicRoutes( { dispatch, setRouteList } )

      // 设置路由
      if ( whiteList.indexOf( pathname ) === -1 ) {
        navigate( '/login', { replace : true } )
      }
    }
  }

  useEffect( async() => await routeGuard(), [pathname] )

  return (
    <div>
      <DynamicRouter routes={ routeList } />
    </div>
  )
}

export default RouterComponent

