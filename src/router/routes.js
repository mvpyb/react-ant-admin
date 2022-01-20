
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

  // {
  //   title : '引导页',
  //   path : '/guide',
  //   component : dynamicImport( () => import( /* webpackChunkName:'Guide'*/'@/views/guide' ) ),
  //   icon : 'key',
  //   roles : ['admin', 'editor']
  // },

  // {
  //   title : '权限测试',
  //   path : '/permission',
  //   icon : 'lock',
  //   redirect : '/permission/explanation',
  //   children : [
  //     {
  //       title : '权限说明',
  //       path : '/explanation',
  //       component : dynamicImport( () => import( /* webpackChunkName:'Explanation'*/'@views/permission' ) ),
  //       roles : ['admin']
  //     },
  //     {
  //       title : 'admin页面',
  //       path : '/adminPage',
  //       component : dynamicImport( () => import( /* webpackChunkName:'AdminPage'*/'@views/permission/adminPage' ) ),
  //       roles : ['admin']
  //     },
  //     {
  //       title : 'guest页面',
  //       path : '/guestPage',
  //       component : dynamicImport( () => import( /* webpackChunkName:'GuestPage'*/'@views/permission/guestPage' ) ),
  //       roles : ['guest']
  //     },
  //     {
  //       title : 'editor页面',
  //       path : '/editorPage',
  //       component : dynamicImport( () => import( /* webpackChunkName:'EditorPage'*/'@views/permission/editorPage' ) ),
  //       roles : ['editor']
  //     }
  //   ]
  // },

  // {
  //   title : '组件',
  //   path : '/components',
  //   icon : 'appstore',
  //   roles : ['admin', 'editor'],
  //   redirect : '/components/richTextEditor',
  //   children : [
  //     {
  //       title : '富文本',
  //       path : '/richTextEditor',
  //       component : dynamicImport( () => import( /* webpackChunkName:'RichTextEditor'*/'@views/components-demo/richTextEditor' ) ),
  //       roles : ['admin', 'editor']
  //     },
  //     {
  //       title : 'Markdown',
  //       path : '/Markdown',
  //       component : dynamicImport( () => import( /* webpackChunkName:'Markdown'*/'@views/components-demo/Markdown' ) ),
  //       roles : ['admin', 'editor']
  //     },
  //     {
  //       title : '拖拽列表',
  //       path : '/draggable',
  //       component : dynamicImport( () => import( /* webpackChunkName:'Draggable'*/'@views/components-demo/draggable' ) ),
  //       roles : ['admin', 'editor']
  //     }
  //   ]
  // },

  // {
  //   title : '图表',
  //   path : '/charts',
  //   icon : 'area-chart',
  //   roles : ['admin', 'editor'],
  //   redirect : '/charts/keyboard',
  //   children : [
  //     {
  //       title : '键盘图表',
  //       path : '/keyboard',
  //       component : dynamicImport( () => import( /* webpackChunkName:'KeyboardChart'*/'@views/charts/keyboard' ) ),
  //       roles : ['admin', 'editor']
  //     },
  //     {
  //       title : '折线图',
  //       path : '/line',
  //       component : dynamicImport( () => import( /* webpackChunkName:'LineChart'*/'@views/charts/line' ) ),
  //       roles : ['admin', 'editor']
  //     },
  //     {
  //       title : '混合图表',
  //       path : '/mix-chart',
  //       component : dynamicImport( () => import( /* webpackChunkName:'MixChart'*/'@views/charts/mixChart' ) ),
  //       roles : ['admin', 'editor']
  //     }
  //   ]
  // },

  // {
  //   title : '路由嵌套',
  //   path : '/nested',
  //   icon : 'cluster',
  //   redirect : '/nested/menu1/menu1-1',
  //   roles : ['admin', 'editor'],
  //   component : Layout,
  //   children : [
  //     {
  //       title : '菜单1',
  //       path : 'menu1',
  //       redirect : '/nested/menu1/menu1-1',
  //       component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/dashboard' ) ),
  //       children : [
  //         {
  //           title : '菜单1-1',
  //           path : 'menu1-1',
  //           // component : dynamicImport( () => import( /* webpackChunkName:'Menu1_1'*/'@views/nested/menu1/menu1-1' ) ),
  //           component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/dashboard' ) ),
  //           roles : ['admin', 'editor']
  //         },
  //         {
  //           title : '菜单1-2',
  //           path : 'menu1-2',
  //           redirect : '/nested/menu1/menu1-2/menu1-2-1',
  //           component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/dashboard' ) ),
  //           children : [
  //             {
  //               title : '菜单1-2-1',
  //               path : 'menu1-2-1',
  //               // component : dynamicImport( () => import( /* webpackChunkName:'Menu1_2_1'*/'@views/nested/menu1/menu1-2/menu1-2-1' ) ),
  //               component : dynamicImport( () => import( /* webpackChunkName:'Dashboard'*/'@views/dashboard' ) ),
  //               roles : ['admin', 'editor']
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // },

  // {
  //   title : '表格',
  //   path : '/table',
  //   component : dynamicImport( () => import( /* webpackChunkName:'Table'*/'@views/table' ) ),
  //   icon : 'table',
  //   roles : ['admin', 'editor']
  // },
  // {
  //   title : 'Excel',
  //   path : '/excel',
  //   redirect : '/excel/export',
  //   icon : 'file-excel',
  //   roles : ['admin', 'editor'],
  //   children : [
  //     {
  //       title : '导出Excel',
  //       path : '/excel/export',
  //       component : dynamicImport( () => import( /* webpackChunkName:'ExportExcel'*/'@views/excel/exportExcel' ) ),
  //       roles : ['admin', 'editor']
  //     },
  //     {
  //       title : '上传Excel',
  //       path : '/excel/upload',
  //       component : dynamicImport( () => import( /* webpackChunkName:'UploadExcel'*/'@views/excel/uploadExcel' ) ),
  //       roles : ['admin', 'editor']
  //     }
  //   ]
  // },
  // {
  //   title : 'Zip',
  //   path : '/zip',
  //   component : dynamicImport( () => import( /* webpackChunkName:'Zip'*/'@views/zip' ) ),
  //   icon : 'file-zip',
  //   roles : ['admin', 'editor']
  // },
  // {
  //   title : '剪贴板',
  //   path : '/clipboard',
  //   component : dynamicImport( () => import( /* webpackChunkName:'Clipboard'*/'@views/clipboard' ) ),
  //   icon : 'copy',
  //   roles : ['admin', 'editor']
  // },
  // {
  //   title : '用户管理',
  //   path : '/user',
  //   component : dynamicImport( () => import( /* webpackChunkName:'User'*/'@views/user' ) ),
  //   icon : 'usergroup-add',
  //   roles : ['admin']
  // },
  // {
  //   title : '关于作者',
  //   path : '/about',
  //   component : dynamicImport( () => import( /* webpackChunkName:'About'*/'@views/about' ) ),
  //   icon : 'user',
  //   roles : ['admin', 'editor', 'guest']
  // },
  // {
  //   title : 'Bug收集',
  //   path : '/bug',
  //   component : dynamicImport( () => import( /* webpackChunkName:'Bug'*/'@views/bug' ) ),
  //   icon : 'bug',
  //   roles : ['admin']
  // },

  // {
  // title : '404',
  // path : '*',
  // redirect : '/404',
  // component : dynamicImport( () => import( /* webpackChunkName:'Error404'*/'@views/errorPage/404' ) ),
  // icon : '404',
  // roles : ['admin'],
  // hidden : true
  // }

  // {
  //   path: '*',
  //   component: lazy(() => import('@/views/404'))
  // }

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
    path : '*',
    component : dynamicImport( () => import( /* webpackChunkName:'Error404'*/'@views/errorPage/404' ) ),
    hidden : true
  },
  {
    path : '/',
    redirect : '/dashboard/index'
  }
]
