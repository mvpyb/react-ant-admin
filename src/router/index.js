
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

// 注入基础路由
const addBasicRoutes = async({ dispatch, setRouteList }) => {
  await dispatch(asyncPermissionRoutes([]))
  const { permission } = await store.getState()
  const { routes } = permission
  setRouteList(routes)
}

const RouterComponent = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const { pathname } = location
  const [routeList, setRouteList] = useState([])
  let isUnmount = false

  const routeGuard = async() => {
    if (!isUnmount) {
      const hasToken = getCookie('token')

      if (hasToken) {
        if (pathname == '/login') {
          navigate('/')
        } else {
          const { users: { roles }} = await store.getState()
          const hasRoles = roles && roles.length > 0
          // 权限为空 则重新获取用户信息
          if (!hasRoles) {
            try {
              const payload = await dispatch(getUserInfoSlice()).unwrap()
              // 权限路由
              await dispatch(asyncPermissionRoutes(payload.roles))
              const { permission } = await store.getState()
              const { routes } = permission
              setRouteList(routes)
            } catch (e) {
              dispatch(CLEAR_USER_INFO())
              navigate('/login')
              window.location.reload()
            }
          }
        }
      } else {
        await addBasicRoutes({ dispatch, setRouteList })
        if (whiteList.indexOf(pathname) === -1) {
          navigate('/login', { replace: true })
        }
      }
    }
  }

  useEffect(() => {
    routeGuard()
    return () => isUnmount = true
  }, [pathname])

  return (
    <div>
      <DynamicRouter routes={ routeList } />
    </div>
  )
}

export default RouterComponent

