
import React from 'react'
import svgs from './svg-icons'
import SvgIcon from '@/components/SvgIcon'
import handleClipboard from '@/utils/clipboard'
import DocumentTitle from 'react-document-title'
import styles from './index.cjs'
import { Alert, Card, Tooltip, Tabs } from 'antd'

const { TabPane } = Tabs

const Ions = () => {
  const generateIconCode = ( Icon ) => {
    return `<SvgIcon iconClass="{${Icon}}" />`
  }
  const copyIcons = ( text, index, event ) => {
    event.stopPropagation()
    handleClipboard( text, event )
  }

  return (
    <DocumentTitle title= {'Icon'}>
      <div className={ 'app-container' }>
        <Alert message='Icons Demo' type='info' />
        <Card className={ styles.cardSection } >
          <Tabs defaultActiveKey='1' className={ styles.tabsSection }>
            <TabPane tab={ 'svg-icon' } key='1' >
              <div className={styles.grid}>
                {
                  svgs && svgs.length && svgs.map( ( svg, index ) => {
                    return (
                      <div
                        key={ svg }
                        onClick={ ( e ) => copyIcons( generateIconCode( svg ), index, e ) }
                      >
                        <Tooltip placement='top' title={ () => generateIconCode( svg ) }>
                          <div className={ styles.iconItem }>
                            <SvgIcon iconClass={ svg } className={ `${styles.disabled}` } />
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
    </DocumentTitle>
  )
}

export default Ions
