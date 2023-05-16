
import { LazyLoad } from '../utils'
const Layout = LazyLoad('layouts')

const nestedRouter = {
  path: '/nested',
  title: '嵌套路由',
  redirect: '/nested/menu1/menu1-1',
  component: Layout,
  icon: 'nested',
  roles: ['admin', 'editor'],
  children: [
    {
      path: '/nested/menu1',
      title: 'Menu1',
      redirect: '/nested/menu1/menu1-1',
      // component : dynamicImport( () => import( /* webpackChunkName:'Menu1'*/'@/views/nested/menu1' ) ),
      component: LazyLoad('views/nested/menu1'),
      roles: ['admin', 'editor'],
      children: [
        {
          path: '/nested/menu1/menu1-1',
          title: 'Menu1-1',
          icon: 'nested',
          // component : dynamicImport( () => import( /* webpackChunkName:'Menu1-1'*/'@/views/nested/menu1/menu1-1' ) ),
          component: LazyLoad('views/nested/menu1/menu1-1'),
          roles: ['admin', 'editor']
        },
        {
          path: '/nested/menu1/menu1-2',
          title: 'Menu1-2',
          redirect: '/nested/menu1/menu1-2/menu1-2-1',
          // component : dynamicImport( () => import( /* webpackChunkName:'Menu1'*/'@/views/nested/menu1/menu1-2' ) ),
          component: LazyLoad('views/nested/menu1/menu1-2'),
          roles: ['admin', 'editor'],
          children: [
            {
              path: '/nested/menu1/menu1-2/menu1-2-1',
              title: 'Menu1-2-1',
              // component : dynamicImport( () => import( /* webpackChunkName:'Menu1'*/'@/views/nested/menu1/menu1-2/menu1-2-1' ) ),
              component: LazyLoad('views/nested/menu1/menu1-2/menu1-2-1'),
              roles: ['admin', 'editor']
            }
          ]
        }
      ]
    },
    {
      path: '/nested/menu2',
      title: 'Menu2',
      redirect: '/nested/menu2/menu1-1',
      // component : dynamicImport( () => import( /* webpackChunkName:'Menu1'*/'@/views/nested/menu1' ) ),
      component: LazyLoad('views/nested/menu1'),
      roles: ['admin', 'editor'],
      children: [
        {
          path: '/nested/menu2/menu1-1',
          title: 'Menu2-1',
          icon: 'nested',
          // component : dynamicImport( () => import( /* webpackChunkName:'Menu1-1'*/'@/views/nested/menu1/menu1-1' ) ),
          component: LazyLoad('views/nested/menu1/menu1-1'),
          roles: ['admin', 'editor']
        },
        {
          path: '/nested/menu2/menu1-2',
          title: 'Menu2-2',
          redirect: '/nested/menu2/menu1-2/menu1-2-1',
          // component : dynamicImport( () => import( /* webpackChunkName:'Menu1'*/'@/views/nested/menu1/menu1-2' ) ),
          component: LazyLoad('views/nested/menu1/menu1-2'),
          roles: ['admin', 'editor'],
          children: [
            {
              path: '/nested/menu2/menu1-2/menu1-2-1',
              title: 'Menu2-2-1',
              // component : dynamicImport( () => import( /* webpackChunkName:'Menu1'*/'@/views/nested/menu1/menu1-2/menu1-2-1' ) ),
              component: LazyLoad('views/nested/menu1/menu1-2/menu1-2-1'),
              roles: ['admin', 'editor']
            }
          ]
        }
      ]
    }
  ]
}

export default nestedRouter
