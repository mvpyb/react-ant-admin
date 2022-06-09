
import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

function generateRouter( routers ) {
  return routers.map( ( item ) => {
    const obj = { ...item }
    const { children, redirect, component } = item
    if ( children && children.length ) {
      obj.children = generateRouter( children )
    }

    /**
     * redirect 目前尝试出的几个解决方案
     * 1、遍历所有路由，提取出所有包含 redirect 字段的路由，然后统一用 Navigate  （目前采用，）
     * 2、新增 index : true, 取消path， 使用官方默认路由的方式
     * 3、需要重定向的页面 path 参数设置为 空值
     * 后期在做分析 或者有没有其他方案
     * */
    let element
    if ( component ) {
      element = <item.component />
    } else {
      if ( redirect ) {
        element = <Navigate to={ item.redirect } replace />
      }
    }
    obj.element = element
    return obj
  } )
}

const DynamicRouter = ( props ) => {
  const routeList = props.routes
  return useRoutes( generateRouter( routeList ) )
}

export default DynamicRouter
