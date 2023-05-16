
import { createSlice } from '@reduxjs/toolkit'
import { asyncRoutes, constantRoutes } from '@/router/routes'
import { getAllRedirects, filterAsyncRoutes } from '@/router/utils'

const basicRedirect = getAllRedirects(constantRoutes, [])
const basicRoutes = basicRedirect.concat(constantRoutes)

export const initialState = {
  routes: [],
  addRoutes: [],
  basicRoutes,
  allRedirects: basicRedirect
}

export const permissionSlice = createSlice({
  name: 'permission',
  initialState,
  reducers: {
    setRoutes: (state, { payload }) => {
      const { allAsyncRoutes, routers, addRoutes, asyncRedirects } = payload
      state.addRoutes = addRoutes
      state.routes = routers
      state.basicRoutes = state.basicRoutes.concat(allAsyncRoutes)
      state.allRedirects = state.allRedirects.concat(asyncRedirects)
    }
    // resetRoutes : ( state, { payload } ) => {
    //   state.addRoutes = []
    //   state.routes = basicRoutes
    // },
  }
})

export const asyncPermissionRoutes = roles => async(dispatch) => {
  // 获取权限路由
  const accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)

  // 提取 权限重定向路由
  const asyncRedirects = getAllRedirects(accessedRoutes, [])

  // 所有权限路由 ： 权限路由 + 权限重定向路由
  // const allAsyncRoutes = accessedRoutes.concat( asyncRedirects )
  const allAsyncRoutes = asyncRedirects.concat(accessedRoutes)

  const result = {
    // accessedRoutes,
    asyncRedirects,
    allAsyncRoutes,
    addRoutes: accessedRoutes,
    routers: basicRoutes.concat(allAsyncRoutes)
  }

  await dispatch(setRoutes(result))

  return result
}

export const { setRoutes } = permissionSlice.actions

export default permissionSlice.reducer
