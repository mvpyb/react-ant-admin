
import React from 'react'
import svgs from './svg-icons'
import SvgIcon from '@/components/SvgIcon'
import handleClipboard from '@/utils/clipboard'
import { useTitle } from 'ahooks'
import styles from './index.cjs'
import { Alert, Card, Tooltip, Tabs } from 'antd'
// import { ReactComponent as GoogleLogo } from "@/icons/svg/404.svg"

const Ions = () => {
  useTitle('Icon')
  const generateIconCode = (Icon) => {
    return `<SvgIcon iconClass="{${Icon}}" />`
  }
  const copyIcons = (text, index, event) => {
    event.stopPropagation()
    handleClipboard(text, event)
  }

  return (
      <div className={ 'app-container' }>
        <Alert message='Icons Demo' type='info' />
        <Card className={ styles.cardSection } >
          <Tabs
            defaultActiveKey='1'
            className={ styles.tabsSection }
            items={[
              {
                key: '1',
                label: `svg-icon`,
                children: (<div className={`${styles.grid}`}>
                  {
                    svgs && svgs.length && svgs.map((svg, index) => {
                      return (
                        <div
                          key={ svg }
                          onClick={ (e) => copyIcons(generateIconCode(svg), index, e) }
                        >
                          <Tooltip placement='top' title={ () => generateIconCode(svg) }>
                            <div className={ styles.iconItem }>
                              <SvgIcon iconClass={ svg } className={ `${styles.disabled}` } />
                              <span> { svg } </span>
                            </div>
                          </Tooltip>
                        </div>
                      )
                    })
                  }
                </div>)
              }
            ]}
          />
        </Card>
      </div>
  )
}

export default Ions
