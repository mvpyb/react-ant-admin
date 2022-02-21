
import Layout from '@/layouts'
import { dynamicImport } from './utils'
import { isExternal } from '@utils/validate'

import componentsRouter from './modules/components'
import nestedRouter from './modules/nested'

// 管理员 admin:该角色拥有系统内所有菜单和路由的权限。
// 编辑员 editor:该角色拥有系统内除用户管理页之外的所有菜单和路由的权限。
// 游客 guest:该角色仅拥有Dashboard、开发文档、权限测试和关于作者三个页面的权限。

const constantRoutesList = [
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
  //     //   component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/dashboard' ) )
  //     // },
  //
  //     {
  //       title : '首页',
  //       path : 'index',
  //       icon : 'home',
  //       component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/dashboard' ) )
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
        path : 'index',
        hidden : true,
        roles : ['admin', 'editor'],
        component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/dashboard' ) )
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
        path : 'index',
        title : '图标',
        icon : 'icon2',
        roles : ['admin', 'editor'],
        hidden : true,
        component : dynamicImport( () => import( /* webpackChunkName:'Icons'*/'@views/icons' ) )
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
        path : 'index',
        title : '国际化',
        roles : ['admin', 'editor'],
        hidden : true,
        component : dynamicImport( () => import( /* webpackChunkName:'I18n'*/'@views/i18n' ) )
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
        path : 'index',
        title : '剪贴板',
        roles : ['admin', 'editor'],
        hidden : true,
        component : dynamicImport( () => import( /* webpackChunkName:'Clipboard'*/'@views/clipboard' ) )
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
        path : 'index',
        title : '折线图',
        roles : ['admin', 'editor'],
        component : dynamicImport( () => import( /* webpackChunkName:'Line'*/'@views/charts/line' ) )
      },
      {
        path : 'keyboard',
        title : '键盘图表',
        roles : ['admin', 'editor'],
        component : dynamicImport( () => import( /* webpackChunkName:'Keyboard'*/'@views/charts/keyboard' ) )
      },
      {
        path : 'mixChart',
        title : '混合图表',
        roles : ['admin', 'editor'],
        component : dynamicImport( () => import( /* webpackChunkName:'MixChart'*/'@views/charts/mixChart' ) )
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
        path : 'export',
        title : '导出表格',
        roles : ['admin', 'editor'],
        component : dynamicImport( () => import( /* webpackChunkName:'Export'*/'@views/excel/export' ) )
      },
      {
        path : 'upload',
        title : '上传表格',
        roles : ['admin', 'editor'],
        component : dynamicImport( () => import( /* webpackChunkName:'Upload'*/'@views/excel/upload' ) )
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
        path : 'index',
        title : 'Zip',
        roles : ['admin', 'editor'],
        hidden : true,
        component : dynamicImport( () => import( /* webpackChunkName:'Zip'*/'@views/zip/index' ) )
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
        path : '404',
        title : '404',
        roles : ['admin', 'editor'],
        component : dynamicImport( () => import( /* webpackChunkName:'ErrorPage404'*/'@views/errorPage/404' ) )
      },
      {
        path : '401',
        title : '401',
        roles : ['admin', 'editor'],
        component : dynamicImport( () => import( /* webpackChunkName:'ErrorPage401'*/'@views/errorPage/401' ) )
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
      }
    ]
  },
  {
    path : 'baidu',
    component : Layout,
    title : '外链-百度',
    icon : 'baidu',
    roles : ['admin', 'editor'],
    redirect : 'https://www.baidu.com/',
    children : [
      {
        hidden : true,
        path : 'https://www.baidu.com/',
        title : '外链1',
        roles : ['admin', 'editor'],
        icon : 'baidu'
      }
    ]
  },

  {
    path : '*',
    redirect : '/404'
  }
]

// 补全
const isLink = ( to ) => isExternal( to )
function addFullPath( lists, initPath = '' ) {
  lists.forEach( ( list, index ) => {
    const { children, redirect, path } = list
    let currentPath
    if ( isLink( path ) ) {
      currentPath = path
    } else {
      currentPath = path.startsWith( '/' ) ? `${initPath}${path}` : `${initPath}/${path}`
    }
    // const currentPath = path.startsWith( '/' ) ? `${initPath}${path}` : `${initPath}/${path}`

    lists.splice( index, 1, {
      ...list,
      fullPath : redirect || currentPath
    } )

    if ( children && children.length ) {
      addFullPath( children, currentPath )
    }
  } )

  return lists
}

export const asyncRoutes = addFullPath( asyncRoutesList )
export const constantRoutes = addFullPath( constantRoutesList )
