
import React from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import { Outlet, useLocation } from 'react-router-dom'
import '@/styles/transition.less'
import styles from './main.module.less'

const { Content } = Layout

import { CSSTransition, TransitionGroup } from 'react-transition-group'

const BaseLayout = ( props ) => {
  const location = useLocation()
  const { fixedHeader } = props

  return (
    <Content className={ `${styles.mainSection} ${fixedHeader ? styles.fixedHeader : ''} ` }>
      {/* 动画 styles-transition.less => forward-from-right back-to-right fade-in fade-transform*/}
      <TransitionGroup
        className={styles.mainWrapper}
        childFactory={child => React.cloneElement( child, { classNames : 'forward-from-right' } )}
      >
        <CSSTransition timeout={500} key={location.pathname}>
          <div className={ styles.mainContent }>
            <Outlet />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Content>
  )
}

const mapStateToProps = state => {
  return {
    // ...state.users,
    // ...state.app,
    ...state.settings
  }
}
export default connect( mapStateToProps )( BaseLayout )
