
import React, { useState, useRef } from 'react'
import { PropTypes } from 'prop-types'
import { Drawer } from 'antd'
import { CloseOutlined, SettingOutlined } from '@ant-design/icons'
import styles from './index.module.less'

const RightPanel = ( props ) => {
  const { buttonTop, setting } = props
  const [show, setShow] = useState( false )
  const rightPanel = useRef( null )

  const toggleShow = () => {
    const showStatus = !show
    setShow( showStatus )
  }
  const onClose = () => {
    setShow( false )
  }

  return (
    <div ref={rightPanel} className={styles.rightPanel}>
      <Drawer
        className={ styles.rightDrawContainer }
        title=''
        placement='right'
        closable={false}
        forceRender={true}
        visible={show}
        onClose={onClose}
      >
        <div className={ styles.handleButton } onClick={ toggleShow } style={{ top : `${buttonTop}px` }} >
          { show ? <CloseOutlined /> : <SettingOutlined /> }
        </div>

        {
          setting
        }
      </Drawer>

    </div>
  )
}

RightPanel.propTypes = {
  buttonTop : PropTypes.number,
  clickNotClose : PropTypes.bool
}

RightPanel.defaultProps = {
  buttonTop : 250,
  clickNotClose : false
}

export default RightPanel
