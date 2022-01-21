
import Layout from '@/layouts'
import { dynamicImport } from './utils'

export const asyncRoutes = [
  {
    title : '首页',
    path : '/dashboard',
    exact : true,
    strict : true,
    icon : 'home',
    redirect : '/dashboard/index',
    roles : ['admin', 'editor'],
    component : Layout,
    children : [
      // {
      //   title : '首页',
      //   // index: true,       // { index: true, element: <Home/> },
      //   // path : '',
      //   path : 'index',
      //   icon : 'home',
      //   roles : ['admin', 'editor'],
      //   component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/dashboard' ) )
      // },

      {
        title : '首页',
        path : 'index',
        icon : 'home',
        roles : ['admin', 'editor'],
        component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/dashboard' ) )
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
    path : '/',
    redirect : '/dashboard/index'
  },
  {
    path : '*',
    redirect : '/404'
  }
]
