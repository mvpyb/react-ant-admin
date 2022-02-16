
import React from 'react'
import SvgIcon from '@/components/SvgIcon'
import svgs from './svg-icons'
import handleClipboard from '@utils/clipboard'
import './index.less'

import {
  Alert, Card, Tooltip, Tabs
} from 'antd'

const { TabPane } = Tabs

const Ions = ( props ) => {
  const generateIconCode = ( Icon ) => {
    return `<SvgIcon iconClass="{${Icon}}" />`
  }

  const copyIcons = ( text, index, event ) => {
    event.stopPropagation()
    handleClipboard( text, event )
  }

  return (
    <div className={ 'icons-container' }>

      <Alert message='Icons Demo' type='info' />

      <Card className={ 'card-section' } >

        <Tabs defaultActiveKey='1' className={'tabs-section'}>
          <TabPane
            tab={ 'svg-icon' }
            key='1'
          >
            <div className={'grid'}>
              {
                svgs && svgs.length && svgs.map( ( svg, index ) => {
                  return (
                    <div key={ svg } onClick={ ( e ) => copyIcons( generateIconCode( svg ), index, e ) }>
                      <Tooltip placement='top' title={ () => generateIconCode( svg ) }>
                        <div className={'icon-item'}>
                          <SvgIcon iconClass={ svg } className={ 'menu-icon disabled' } />
                          <span> { svg } </span>
                        </div>
                      </Tooltip>
                    </div>
                  )
                } )
              }
            </div>
          </TabPane>

        </Tabs>

      </Card>

    </div>
  )
}

export default Ions
