
import Layout from '@/layouts'
import { dynamicImport } from '../utils'

const componentsRouter = {
  path : '/components',
  title : '组件示例',
  redirect : '/components/tinymce',
  component : Layout,
  icon : 'menu2',
  roles : ['admin', 'editor'],

  children : [
    {
      path : 'tinymce',
      title : '富文本（tinymce）',
      roles : ['admin', 'editor'],
      component : dynamicImport( () => import( /* webpackChunkName:'Tinymce'*/'@views/components-demo/richText/tinymce' ) )
    },
    {
      path : 'draft',
      title : '富文本（draft）',
      roles : ['admin', 'editor'],
      component : dynamicImport( () => import( /* webpackChunkName:'Draft'*/'@views/components-demo/richText/draft' ) )
    },
    {
      path : 'draggable',
      title : '拖拽组件',
      roles : ['admin', 'editor'],
      component : dynamicImport( () => import( /* webpackChunkName:'Drag'*/'@views/components-demo/drag/index' ) )
    }
  ]
}

export default componentsRouter
