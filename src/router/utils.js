
// import { Suspense, lazy } from 'react'
import Loadable from 'react-loadable'
import Loading from '@/components/Loading'

// 文档： https://www.npmjs.com/package/react-loadable
export const dynamicImport = ( fn ) => {
  return Loadable( {
    loader : fn,
    loading : Loading
    // delay : 100,
    // timedOut : 1000 * 60 * 5 // 5分钟
  } )
}

/**
 * 获取路由列表中所有重定向
 * @params routers : 遍历对象 Array
 * @params directs : 存储结果得对象 Array
 * @params initPath : 所有父级path累加值，默认为空
 * @returns [ { path, redirect } ]
 * */
export function getAllRedirects( routers, directs, initPath = '' ) {
  routers.forEach( item => {
    const { children, redirect, path, component } = item
    // if ( item.index ) {
    const currentPath = path.startsWith( '/' ) ? `${initPath}${path}` : `${initPath}/${path}`

    // TODO && component => 防止重复添加
    if ( redirect && component ) {
      // if ( redirect ) {
      directs.push( {
        path : currentPath,
        redirect
      } )
    }

    if ( children && children.length ) {
      getAllRedirects( children, directs, currentPath )
    }
    // }
  } )
  return directs
}

/**
 * 使用 roles 来判断当前用户是否具有权限
 * @param roles 用户当前得权限标识 Array
 * @param route 路由参数
 */
function hasPermission( roles, route ) {
  if ( route.roles && roles.length ) {
    return roles.some( role => route.roles.includes( role ) )
  } else {
    return true
  }
}

/**
 * 通过递归过滤异步路由表
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes( routes, roles ) {
  const res = []
  if ( roles && roles.length ) {
    routes.forEach( route => {
      const tmp = { ...route }
      if ( hasPermission( roles, tmp ) ) {
        if ( tmp.children ) {
          tmp.children = filterAsyncRoutes( tmp.children, roles )
        }
        res.push( tmp )
      }
    } )
  }
  return res
}

// export function getFullKey( route ) {
//   const { path, fullPath, redirect } = route
//   const fullKey = `${path}_${fullPath || redirect}`
//   return fullKey
// }
