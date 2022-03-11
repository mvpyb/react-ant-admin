
import React, { useRef } from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Switch, Tooltip, Divider } from 'antd'
import { TOGGLE_TAGS_VIEW, TOGGLE_SIDEBAR_LOGO, TOGGLE_FIX_HEADER, CHANGE_LAYOUT_MODE } from '@/store/reducers/settings'
import styles from './index.module.less'

const Settings = ( props ) => {
  const { tagsView, fixedHeader, sidebarLogo, layoutMode } = props
  const dispatch = useDispatch()
  const verticalEl = useRef( null )
  const horizontalEl = useRef( null )
  // const mixEl = useRef( null )

  const toggleTagsView = ( e ) => {
    dispatch( TOGGLE_TAGS_VIEW() )
  }

  const toggleFixedHeader = ( e ) => {
    dispatch( TOGGLE_FIX_HEADER() )
  }

  const toggleSideBarLogo = ( e ) => {
    dispatch( TOGGLE_SIDEBAR_LOGO() )
  }

  const changeMode = ( value ) => {
    dispatch( CHANGE_LAYOUT_MODE( value ) )
  }

  return (
    <div className={ styles.drawerContainer }>
      <div>

        <Divider > 系统布局配置 </Divider>

        <div className={ styles.drawerItem }>
          <span>开启 TagsView</span>
          <Switch checked={ tagsView } onChange={toggleTagsView} className={styles.drawerSwitch} />
        </div>

        <div className={ styles.drawerItem }>
          <span>固定 Header</span>
          <Switch checked={ fixedHeader } onChange={toggleFixedHeader} className={styles.drawerSwitch} />
        </div>

        <div className={ styles.drawerItem }>
          <span>侧边栏 Logo</span>
          <Switch checked={ sidebarLogo } onChange={toggleSideBarLogo} className={styles.drawerSwitch} />
        </div>

        <Divider > 布局模式 </Divider>

        <div className={ styles.drawerItem }>
          <div className={ styles.layoutMode }>
            <Tooltip title='左侧模式'>
              <div
                className={ `${layoutMode === 'vertical' ? styles.active : ''} ${styles.modeItem}` }
                ref={ verticalEl }
                onClick={ () => changeMode( 'vertical' ) }
              >
                <div></div>
                <div></div>
              </div>
            </Tooltip>

            <Tooltip title='顶部模式'>
              <div
                className={ `${layoutMode === 'horizontal' ? styles.active : ''} ${styles.modeItem}` }
                ref={ horizontalEl }
                onClick={ () => changeMode( 'horizontal' ) }
              >
                <div></div>
                <div></div>
              </div>
            </Tooltip>

            {/* <Tooltip title='混合模式'>
              <div
                className={ `${layoutMode === 'mix' ? styles.active : ''} ${styles.modeItem}` }
                ref={ mixEl }
                onClick={ () => changeMode( 'mix' ) }
              >
                <div></div>
                <div></div>
              </div>
            </Tooltip>*/}
          </div>
        </div>

      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    ...state.settings
  }
}
export default connect( mapStateToProps )( Settings )

