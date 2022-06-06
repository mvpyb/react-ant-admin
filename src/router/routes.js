
import Layout from '@/layouts'
import { dynamicImport } from './utils'
import componentsRouter from './modules/components'
import nestedRouter from './modules/nested'
// import { isExternal } from '@/utils/validate'

/**
 * Note: 子菜单只在路由子菜单时出现。长度> = 1
 *
 * hidden: true                   如果设置为true, item将不会显示在侧边栏中(默认为false)
 * redirect: '                    重定向地址
 * title:'router-name'            名称显示在侧边栏和面包屑(建议设置)
 * roles: ['admin','editor']      控制页面角色(您可以设置多个角色)
 * icon: 'svg-name'               svgIcon
 * affix: true                    如果设置为true，标签将会一直显示在tags-view中
 */

const constantRoutesList = [
  {
    path : '/login',
    component : dynamicImport( () => import( /* webpackChunkName:'Login'*/'@/views/login' ) ),
    hidden : true
  },
  {
    path : '/401',
    component : dynamicImport( () => import( /* webpackChunkName:'Error401'*/'@/views/errorPage/401' ) ),
    hidden : true
  },
  {
    path : '/404',
    component : dynamicImport( () => import( /* webpackChunkName:'Error401'*/'@/views/errorPage/404' ) ),
    hidden : true
  },
  // {
  //   path : '/dashboard',
  //   // exact : true,
  //   // strict : true,
  //   // title : '首页',
  //   // icon : 'home',
  //   redirect : '/dashboard/index',
  //   component : Layout,
  //   children : [
  //     // {
  //     //   title : '首页',
  //     //   // index: true,       // { index: true, element: <Home/> },
  //     //   // path : '',
  //     //   path : 'index',
  //     //   icon : 'home',
  //     //   component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@/views/dashboard' ) )
  //     // },
  //
  //     {
  //       title : '首页',
  //       path : 'index',
  //       icon : 'home',
  //       component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@/views/dashboard' ) )
  //     }
  //
  //   ]
  // },

  {
    path : '/',
    redirect : '/dashboard/index'
  }
]

const asyncRoutesList = [
  {
    path : '/dashboard',
    title : '首页',
    icon : 'home',
    redirect : '/dashboard/index',
    component : Layout,
    roles : ['admin', 'editor'],
    children : [
      {
        title : '首页',
        path : '/dashboard/index',
        hidden : true,
        affix : true,
        roles : ['admin', 'editor'],
        component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@/views/dashboard' ) )
      }
    ]
  },

  {
    path : '/icons',
    title : '图标',
    redirect : '/icons/index',
    component : Layout,
    roles : ['admin', 'editor'],
    icon : 'icon2',
    children : [
      {
        path : '/icons/index',
        title : '图标',
        icon : 'icon2',
        roles : ['admin', 'editor'],
        hidden : true,
        affix : true,
        component : dynamicImport( () => import( /* webpackChunkName:'Icons'*/'@/views/icons' ) )
      }
    ]
  },

  {
    path : '/i18n',
    title : '国际化',
    redirect : '/i18n/index',
    component : Layout,
    roles : ['admin', 'editor'],
    icon : 'i18n',
    children : [
      {
        path : '/i18n/index',
        title : '国际化',
        roles : ['admin', 'editor'],
        hidden : true,
        component : dynamicImport( () => import( /* webpackChunkName:'I18n'*/'@/views/i18n' ) )
      }
    ]
  },
  {
    path : '/clipboard',
    title : '剪贴板',
    redirect : '/clipboard/index',
    component : Layout,
    roles : ['admin', 'editor'],
    icon : 'clipboard',
    children : [
      {
        path : '/clipboard/index',
        title : '剪贴板',
        roles : ['admin', 'editor'],
        hidden : true,
        component : dynamicImport( () => import( /* webpackChunkName:'Clipboard'*/'@/views/clipboard' ) )
      }
    ]
  },

  {
    path : '/charts',
    title : '图表',
    redirect : '/charts/index',
    component : Layout,
    icon : 'chat',
    roles : ['admin', 'editor'],
    children : [
      {
        path : '/charts/index',
        title : '折线图',
        roles : ['admin', 'editor'],
        component : dynamicImport( () => import( /* webpackChunkName:'Line'*/'@/views/charts/line' ) )
      },
      {
        path : '/charts/keyboard',
        title : '键盘图表',
        roles : ['admin', 'editor'],
        component : dynamicImport( () => import( /* webpackChunkName:'Keyboard'*/'@/views/charts/keyboard' ) )
      },
      {
        path : '/charts/mixChart',
        title : '混合图表',
        roles : ['admin', 'editor'],
        component : dynamicImport( () => import( /* webpackChunkName:'MixChart'*/'@/views/charts/mixChart' ) )
      },
      {
        path : '/charts/g6',
        title : 'G6',
        roles : ['admin', 'editor'],
        component : dynamicImport( () => import( /* webpackChunkName:'MixChart'*/'@/views/charts/g6' ) )
      }
    ]
  },

  {
    path : '/excel',
    title : 'Excel',
    redirect : '/excel/export',
    component : Layout,
    icon : 'excel',
    roles : ['admin', 'editor'],
    children : [
      {
        path : '/excel/export',
        title : '导出表格',
        roles : ['admin', 'editor'],
        component : dynamicImport( () => import( /* webpackChunkName:'Export'*/'@/views/excel/export' ) )
      },
      {
        path : '/excel/upload',
        title : '上传表格',
        roles : ['admin', 'editor'],
        component : dynamicImport( () => import( /* webpackChunkName:'Upload'*/'@/views/excel/upload' ) )
      }
    ]
  },

  {
    path : '/zip',
    title : 'Zip',
    redirect : '/zip/index',
    component : Layout,
    icon : 'zip',
    roles : ['admin', 'editor'],
    children : [
      {
        path : '/zip/index',
        title : 'Zip',
        roles : ['admin', 'editor'],
        hidden : true,
        component : dynamicImport( () => import( /* webpackChunkName:'Zip'*/'@/views/zip/index' ) )
      }
    ]
  },

  /* components-demo*/
  componentsRouter,
  nestedRouter,

  {
    path : '/error',
    title : '错误页面',
    redirect : '/error/404',
    component : Layout,
    icon : '404',
    roles : ['admin', 'editor'],
    children : [
      {
        path : '/error/404',
        title : '404',
        roles : ['admin', 'editor'],
        component : dynamicImport( () => import( /* webpackChunkName:'ErrorPage404'*/'@/views/errorPage/404' ) )
      },
      {
        path : '/error/401',
        title : '401',
        roles : ['admin', 'editor'],
        component : dynamicImport( () => import( /* webpackChunkName:'ErrorPage401'*/'@/views/errorPage/401' ) )
      }
    ]
  },

  {
    path : 'antd',
    component : Layout,
    title : '外链-ant',
    icon : 'ant-design',
    roles : ['admin', 'editor'],
    children : [
      {
        roles : ['admin', 'editor'],
        path : 'https://ant.design/docs/react/introduce-cn',
        title : 'ant-design'
      },
      {
        roles : ['admin', 'editor'],
        path : 'https://www.baidu.com/',
        title : '百度'
      }
    ]
  },

  {
    path : '*',
    redirect : '/error/404'
  }
]

// // 补全
// const isLink = ( to ) => isExternal( to )

// function addFullPath( lists, initPath = '' ) {
//   lists.forEach( ( list, index ) => {
//     const { children, redirect, path } = list
//     let currentPath
//     if ( isLink( path ) ) {
//       currentPath = path
//     } else {
//       currentPath = path.startsWith( '/' ) ? `${initPath}${path}` : `${initPath}/${path}`
//     }
//     // const currentPath = path.startsWith( '/' ) ? `${initPath}${path}` : `${initPath}/${path}`
//
//     lists.splice( index, 1, {
//       ...list,
//       fullPath : redirect || currentPath
//     } )
//
//     if ( children && children.length ) {
//       addFullPath( children, currentPath )
//     }
//   } )
//
//   return lists
// }

// export const asyncRoutes = addFullPath( asyncRoutesList )
// export const constantRoutes = addFullPath( constantRoutesList )

export const asyncRoutes = asyncRoutesList
export const constantRoutes = constantRoutesList
