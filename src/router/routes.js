
import Layout from '@/layouts'
import { dynamicImport } from './utils'
import { isExternal } from '@utils/validate'

const asyncRoutesList = [
  {
    path : '/test1',
    title : 'test1',
    redirect : '/test1/index',
    roles : ['admin'],
    component : Layout,
    icon : '404',
    children : [
      {
        path : 'index',
        title : 'test1-1',
        // icon : 'test',
        roles : ['admin'],
        // hidden : true,
        component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/test' ) )

        // redirect : '/test1/index1/index11',
        // children : [
        //   {
        //     path : 'index11',
        //     title : 'test1-1-1',
        //     icon : 'test',
        //     roles : ['admin'],
        //     // hidden : true,
        //     component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/test' ) )
        //   }
        // ]
      },
      {
        path : 'index2',
        title : 'test1-2',
        roles : ['admin'],
        // icon : 'test2',
        // hidden : true,
        component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/test/index1' ) )
      }
    ]
  },

  {
    path : '/test2',
    title : 'test2',
    redirect : '/test2/index',
    component : Layout,
    icon : 'link',
    roles : ['admin'],
    children : [
      {
        path : 'index',
        title : 'test2-1',
        icon : 'link',
        roles : ['admin'],
        // hidden : true,
        component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/test' ) )
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

console.log( 'asyncRoutes', asyncRoutes )
