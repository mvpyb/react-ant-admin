
import React, { useState, useEffect } from 'react'
import screenFull from 'screenfull'
import { message, Tooltip } from 'antd'
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons'
import styles from './index.module.less'

const FullScreen = () => {
  const [isFullscreen, setIsFullscreen] = useState( false )
  const isEnabled = screenFull.isEnabled

  const change = () => {
    setIsFullscreen( screenFull.isFullscreen )
  }

  const toggleScreen = () => {
    if ( !isEnabled ) {
      message.warning( '你的浏览器不支持，请更换高版本浏览器' )
      return false
    }
    screenFull.toggle()
  }

  useEffect( () => {
    isEnabled && screenFull.on( 'change', change )
    return () => {
      isEnabled && screenFull.off( 'change', change )
    }
  }, [] )

  const title = isFullscreen ? '取消全屏' : '全屏'
  return (
    <div className={ styles.fullScreenSection }>
      <Tooltip placement='bottom' title={title}>
        {
          isFullscreen ? <FullscreenExitOutlined onClick={toggleScreen} /> : <FullscreenOutlined onClick={toggleScreen} />
        }
      </Tooltip>
    </div>
  )
}

export default FullScreen
