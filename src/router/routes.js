
import Layout from '@/layouts'
import { dynamicImport } from './utils'
import { isExternal } from '@utils/validate'

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
  },
  {
    path : '*',
    redirect : '/404'
  }
]

const asyncRoutesList = [
  {
    path : '/dashboard',
    title : '首页',
    icon : 'home',
    redirect : '/dashboard/index',
    component : Layout,
    children : [
      {
        title : '首页',
        path : 'index',
        hidden : true,
        component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/dashboard' ) )
      }
    ]
  },

  {
    path : '/icons',
    title : '图标',
    redirect : '/icons/index',
    component : Layout,
    roles : ['admin'],
    icon : 'icon2',
    children : [
      {
        path : 'index',
        title : '图标',
        icon : 'icon2',
        roles : ['admin'],
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
    roles : ['admin'],
    icon : 'i18n',
    children : [
      {
        path : 'index',
        title : '国际化',
        // roles : ['admin'],
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
    roles : ['admin'],
    icon : 'clipboard',
    children : [
      {
        path : 'index',
        title : '剪贴板',
        // icon : '剪贴板',
        // roles : ['admin'],
        hidden : true,
        component : dynamicImport( () => import( /* webpackChunkName:'Clipboard'*/'@views/clipboard' ) )
      }
    ]
  },

  /* components-demo*/
  {
    path : '/components',
    title : '组件示例',
    redirect : '/components/tinymce',
    component : Layout,
    icon : 'menu2',
    roles : ['admin'],

    children : [
      {
        path : 'tinymce',
        title : '富文本（tinymce）',
        component : dynamicImport( () => import( /* webpackChunkName:'Tinymce'*/'@views/components-demo/richText/tinymce' ) )
      },
      {
        path : 'draft',
        title : '富文本（draft）',
        component : dynamicImport( () => import( /* webpackChunkName:'Draft'*/'@views/components-demo/richText/draft' ) )
      },
      {
        path : 'draggable',
        title : '拖拽组件',
        component : dynamicImport( () => import( /* webpackChunkName:'Drag'*/'@views/components-demo/drag/index' ) )
      }
    ]
  },

  {
    path : '/charts',
    title : '图表',
    redirect : '/charts/index',
    component : Layout,
    icon : 'chat',
    roles : ['admin'],
    children : [
      {
        path : 'index',
        title : '折线图',
        roles : ['admin'],
        component : dynamicImport( () => import( /* webpackChunkName:'Line'*/'@views/charts/line' ) )
      },
      {
        path : 'keyboard',
        title : '键盘图表',
        roles : ['admin'],
        component : dynamicImport( () => import( /* webpackChunkName:'Keyboard'*/'@views/charts/keyboard' ) )
      },
      {
        path : 'mixChart',
        title : '混合图表',
        roles : ['admin'],
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
    children : [
      {
        path : 'export',
        title : '导出表格',
        component : dynamicImport( () => import( /* webpackChunkName:'Export'*/'@views/excel/export' ) )
      },
      {
        path : 'upload',
        title : '上传表格',
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
    children : [
      {
        path : 'index',
        title : 'Zip',
        // roles : ['admin'],
        hidden : true,
        component : dynamicImport( () => import( /* webpackChunkName:'Zip'*/'@views/zip/index' ) )
      }
    ]
  },

  {
    path : '/nested',
    title : '嵌套路由',
    redirect : '/nested/menu1/menu1-1',
    component : Layout,
    icon : 'nested',
    roles : ['admin'],

    children : [
      {
        path : 'menu1',
        title : 'Menu1',
        redirect : '/nested/menu1/menu1-1',
        component : dynamicImport( () => import( /* webpackChunkName:'Menu1'*/'@views/nested/menu1' ) ),
        // icon : 'nested',
        roles : ['admin'],
        children : [
          {
            path : 'menu1-1',
            title : 'Menu1-1',
            icon : 'nested',
            component : dynamicImport( () => import( /* webpackChunkName:'Menu1-1'*/'@views/nested/menu1/menu1-1' ) ),
            roles : ['admin']
          },
          {
            path : 'menu1-2',
            title : 'Menu1-2',
            redirect : '/nested/menu1/menu1-2/menu1-2-1',
            component : dynamicImport( () => import( /* webpackChunkName:'Menu1'*/'@views/nested/menu1/menu1-2' ) ),
            roles : ['admin'],
            // icon : 'nested',
            children : [
              {
                path : 'menu1-2-1',
                title : 'Menu1-2-1',
                // icon : 'nested',
                component : dynamicImport( () => import( /* webpackChunkName:'Menu1'*/'@views/nested/menu1/menu1-2/menu1-2-1' ) ),
                roles : ['admin']
              }
            ]
          }
        ]
      }
    ]
  },

  {
    path : '/error',
    title : '错误页面',
    redirect : '/error/404',
    component : Layout,
    icon : '404',
    roles : ['admin'],
    children : [
      {
        path : '404',
        title : '404',
        roles : ['admin'],
        component : dynamicImport( () => import( /* webpackChunkName:'ErrorPage404'*/'@views/errorPage/404' ) )
      },
      {
        path : '401',
        title : '401',
        roles : ['admin'],
        component : dynamicImport( () => import( /* webpackChunkName:'ErrorPage401'*/'@views/errorPage/401' ) )
      }
    ]
  },

  {
    path : 'antd',
    component : Layout,
    title : '外链-ant',
    icon : 'ant-design',
    children : [
      {
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
    redirect : 'https://www.baidu.com/',
    children : [
      {
        hidden : true,
        path : 'https://www.baidu.com/',
        title : '外链1',
        icon : 'baidu'
      }
    ]
  }

  // {
  //   path : '/test3',
  //   title : 'test2',
  //   redirect : '/test2/index2',
  //   component : Layout,
  //   roles : ['admin'],
  //   children : [
  //     {
  //       path : 'index31',
  //       title : 'test2-1',
  //       icon : 'test2',
  //       roles : ['admin'],
  //       // hidden : true,
  //       component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/test' ) )
  //     }
  //   ]
  // },
  // {
  //   path : '/test4',
  //   title : 'test2',
  //   redirect : '/test2/index2',
  //   component : Layout,
  //   roles : ['admin'],
  //   children : [
  //     {
  //       path : 'index41',
  //       title : 'test2-1',
  //       icon : 'test2',
  //       roles : ['admin'],
  //       // hidden : true,
  //       component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/test' ) )
  //     }
  //   ]
  // },
  // {
  //   path : '/test5',
  //   title : 'test2',
  //   redirect : '/test2/index2',
  //   component : Layout,
  //   roles : ['admin'],
  //   children : [
  //     {
  //       path : 'index51',
  //       title : 'test2-1',
  //       icon : 'test2',
  //       roles : ['admin'],
  //       // hidden : true,
  //       component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/test' ) )
  //     }
  //   ]
  // },
  // {
  //   path : '/test6',
  //   title : 'test2',
  //   redirect : '/test2/index2',
  //   component : Layout,
  //   roles : ['admin'],
  //   children : [
  //     {
  //       path : 'index61',
  //       title : 'test2-1',
  //       icon : 'test2',
  //       roles : ['admin'],
  //       // hidden : true,
  //       component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/test' ) )
  //     }
  //   ]
  // },
  // {
  //   path : '/test7',
  //   title : 'test2',
  //   redirect : '/test2/index2',
  //   component : Layout,
  //   roles : ['admin'],
  //   children : [
  //     {
  //       path : 'index71',
  //       title : 'test2-1',
  //       icon : 'test2',
  //       roles : ['admin'],
  //       // hidden : true,
  //       component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/test' ) )
  //     }
  //   ]
  // },
  // {
  //   path : '/test8',
  //   title : 'test2',
  //   redirect : '/test2/index2',
  //   component : Layout,
  //   roles : ['admin'],
  //   children : [
  //     {
  //       path : 'index81',
  //       title : 'test2-1',
  //       icon : 'test2',
  //       roles : ['admin'],
  //       // hidden : true,
  //       component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/test' ) )
  //     }
  //   ]
  // },
  // {
  //   path : '/test9',
  //   title : 'test2',
  //   redirect : '/test2/index2',
  //   component : Layout,
  //   roles : ['admin'],
  //   children : [
  //     {
  //       path : 'index91',
  //       title : 'test2-1',
  //       icon : 'test2',
  //       roles : ['admin'],
  //       // hidden : true,
  //       component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/test' ) )
  //     }
  //   ]
  // },
  // {
  //   path : '/test10',
  //   title : 'test2',
  //   redirect : '/test2/index2',
  //   component : Layout,
  //   roles : ['admin'],
  //   children : [
  //     {
  //       path : 'index101',
  //       title : 'test2-1',
  //       icon : 'test2',
  //       roles : ['admin'],
  //       // hidden : true,
  //       component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/test' ) )
  //     }
  //   ]
  // },
  // {
  //   path : '/test11',
  //   title : 'test2',
  //   redirect : '/test2/index2',
  //   component : Layout,
  //   roles : ['admin'],
  //   children : [
  //     {
  //       path : 'index111',
  //       title : 'test2-1',
  //       icon : 'test2',
  //       roles : ['admin'],
  //       // hidden : true,
  //       component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/test' ) )
  //     }
  //   ]
  // },
  // {
  //   path : '/test122',
  //   title : 'test122',
  //   redirect : '/test2/index2',
  //   component : Layout,
  //   roles : ['admin'],
  //   children : [
  //     {
  //       path : 'index121',
  //       title : 'test122-1',
  //       icon : 'test2',
  //       roles : ['admin'],
  //       // hidden : true,
  //       component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/test' ) )
  //     }
  //   ]
  // },
  // {
  //   path : '/test13',
  //   title : 'test13',
  //   redirect : '/test2/index2',
  //   component : Layout,
  //   roles : ['admin'],
  //   children : [
  //     {
  //       path : 'index131',
  //       title : 'test13-1',
  //       icon : 'test2',
  //       roles : ['admin'],
  //       // hidden : true,
  //       component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/test' ) )
  //     }
  //   ]
  // },
  // {
  //   path : '/test14',
  //   title : 'test14',
  //   redirect : '/test2/index2',
  //   component : Layout,
  //   roles : ['admin'],
  //   children : [
  //     {
  //       path : 'index141',
  //       title : 'test14-1',
  //       icon : 'test2',
  //       roles : ['admin'],
  //       // hidden : true,
  //       component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/test' ) )
  //     }
  //   ]
  // },
  //
  // {
  //   path : '/test15',
  //   title : 'test15',
  //   redirect : '/test2/index2',
  //   component : Layout,
  //   roles : ['admin'],
  //   children : [
  //     {
  //       path : 'index151',
  //       title : 'test15-1',
  //       icon : 'test2',
  //       roles : ['admin'],
  //       // hidden : true,
  //       component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/test' ) )
  //     }
  //   ]
  // },
  // {
  //   path : '/test16',
  //   title : 'test16',
  //   redirect : '/test2/index2',
  //   component : Layout,
  //   roles : ['admin'],
  //   children : [
  //     {
  //       path : 'index161',
  //       title : 'test16-1',
  //       icon : 'test2',
  //       roles : ['admin'],
  //       // hidden : true,
  //       component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/test' ) )
  //     }
  //   ]
  // },
  // {
  //   path : '/test17',
  //   title : 'test17',
  //   redirect : '/test2/index2',
  //   component : Layout,
  //   roles : ['admin'],
  //   children : [
  //     {
  //       path : 'index171',
  //       title : 'test17-1',
  //       icon : 'test2',
  //       roles : ['admin'],
  //       // hidden : true,
  //       component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/test' ) )
  //     }
  //   ]
  // },
  // {
  //   path : '/test18',
  //   title : 'test18',
  //   redirect : '/test2/index2',
  //   component : Layout,
  //   roles : ['admin'],
  //   children : [
  //     {
  //       path : 'index181',
  //       title : 'test18-1',
  //       icon : 'test2',
  //       roles : ['admin'],
  //       // hidden : true,
  //       component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/test' ) )
  //     }
  //   ]
  // }

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
