
import Layout from '@/layouts'
import { dynamicImport } from './utils'

export const asyncRoutes = [
  {
    path : '/test1',
    title : 'test1',
    redirect : '/test1/index',
    roles : ['admin'],
    component : Layout,
    children : [
      {
        path : 'index1',
        title : 'test1-1',
        icon : 'test',
        roles : ['admin'],
        component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/test' ) )
      },
      {
        path : 'index2',
        title : 'test1-2',
        roles : ['admin'],
        icon : 'test2',
        component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/test/index1' ) )
      }
    ]
  },

  {
    path : '/test2',
    title : 'test2',
    redirect : '/test2/index2',
    component : Layout,
    roles : ['admin'],
    children : [
      {
        path : 'index2',
        title : 'test2-1',
        icon : 'test2',
        roles : ['admin'],
        component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/test' ) )
      }
    ]
  }
]

export const constantRoutes = [
  {
    path : '/login',
    name : 'Login',
    component : dynamicImport( () => import( /* webpackChunkName:'Login'*/'@views/login' ) ),
    hidden : true
  },
  {
    path : '/401',
    component : dynamicImport( () => import( /* webpackChunkName:'Error401'*/'@views/errorPage/401' ) ),
    hidden : true
  },
  {
    path : '/404',
    component : dynamicImport( () => import( /* webpackChunkName:'Error401'*/'@views/errorPage/404' ) ),
    hidden : true
  },
  {
    path : '/dashboard',
    // exact : true,
    // strict : true,
    // title : '首页',
    // icon : 'home',
    redirect : '/dashboard/index',
    component : Layout,
    children : [
      // {
      //   title : '首页',
      //   // index: true,       // { index: true, element: <Home/> },
      //   // path : '',
      //   path : 'index',
      //   icon : 'home',
      //   component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/dashboard' ) )
      // },

      {
        title : '首页',
        path : 'index',
        icon : 'home',
        component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/dashboard' ) )
      }

    ]
  },

  {
    path : '/',
    redirect : '/dashboard/index'
  },
  {
    path : '*',
    redirect : '/404'
  }
]
