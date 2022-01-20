import React from 'react'
import { connect } from 'react-redux'
import { Icon, Tooltip } from 'antd'
// TODO
// import { toggleSettingPanel } from '@/store/actions'
import './index.less'

const Settings = ( props ) => {
  // TODO
  // const { toggleSettingPanel } = props
  return (
    <div className='settings-container'>
      <Tooltip placement='bottom' title='系统设置'>
        {/* // TODO*/}
        {/* <Icon type='setting' onClick={toggleSettingPanel} />*/}
      </Tooltip>
    </div>
  )
}

// TODO
// export default connect( null, { toggleSettingPanel } )( Settings )
export default Settings
