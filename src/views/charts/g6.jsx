
import React, { useEffect } from 'react'
import G6 from '@antv/g6'
import { Card } from 'antd'

const AntV = ( props ) => {
  const ref = React.useRef( null )
  let graph = null

  const getData = async() => {
    const response = await fetch( 'https://gw.alipayobjects.com/os/antvdemo/assets/data/algorithm-category.json' )
    return await response.json()
  }

  useEffect( async() => {
    const result = await getData()

    if ( !graph ) {
      graph = await init()
      await registerNode( graph )
    }

    const container = ref.current
    if ( typeof window !== 'undefined' ) {
      window.onresize = () => {
        if ( !graph || graph.get( 'destroyed' ) ) return
        if ( !container || !container.scrollWidth || !container.scrollHeight ) return
        graph.changeSize( container.scrollWidth, container.scrollHeight )
      }
    }

    graph.data( result )
    graph.render()
    graph.fitView()
  }, [] )

  const init = async() => {
    const container = ref.current
    const width = container.scrollWidth
    const height = container.scrollHeight || 500

    const graphInstance = new G6.TreeGraph( {
      container,
      width,
      height,
      // https://g6.antv.vision/zh/docs/manual/middle/states/defaultBehavior
      modes : {
        default : [
          {
            type : 'collapse-expand',
            onChange : function onChange( item, collapsed ) {
              const data = item.get( 'model' )
              data.collapsed = collapsed
              return true
            }
          },
          'drag-canvas',
          'drag-node',
          'zoom-canvas'
        ]
      },
      defaultNode : {
        size : 26,
        anchorPoints : [
          [0, 0.5],
          [1, 0.5]
        ]
      },
      defaultEdge : {
        type : 'cubic-horizontal'
      },
      layout : {
        type : 'mindmap',
        direction : 'H',
        getHeight : () => {
          return 16
        },
        getWidth : () => {
          return 16
        },
        getVGap : () => {
          return 10
        },
        getHGap : () => {
          return 50
        },
        getSide : ( d ) => {
          if ( d.id === 'Classification' ) {
            return 'left'
          }
          return 'right'
        }
      }
    } )

    return graphInstance
  }

  const registerNode = async( graphInstance ) => {
    let centerX = 0
    graphInstance.node( node => {
      if ( node.id === 'Modeling Methods' ) {
        centerX = node.x
      }

      return {
        label : node.id,
        labelCfg : {
          position :
              node.children && node.children.length > 0
                ? 'left'
                : node.x > centerX
                  ? 'right'
                  : 'left',
          offset : 5
        }
      }
    } )
  }

  return (
    <div className={'app-container'}>
      <Card
        title='G6 simple demo'
        extra={
          <a
            href='https://g6.antv.vision/zh/docs/api/Graph/#graphoptionsfitview'
            target={'_blank'}
            rel='noreferrer'
          >See More</a>
        }
      >
        <div ref={ref} />
      </Card>
    </div>
  )
}

export default AntV
