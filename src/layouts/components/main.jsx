
import React from 'react'
import { Layout } from 'antd'
import { connect } from 'react-redux'
import { Outlet, useLocation } from 'react-router-dom'
import '@/styles/transition.scss'
import styles from './main.cjs.js'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
const { Content } = Layout

const Main = (props) => {
  const location = useLocation()
  const { fixedHeader, tagsView } = props

  return (
    <Content
      className={ `${styles.mainSection} ${fixedHeader ? 'fixedHeader' : ''} ${tagsView ? 'hasTags' : 'noTags'} ` }
    >
      {/* 动画 styles-transition.scss => forward-from-right back-to-right fade-in fade-transform*/}
      <TransitionGroup
        className={styles.mainWrapper}
        childFactory={child => React.cloneElement(child, { classNames: 'forward-from-right' })}
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
    ...state.settings
  }
}
export default connect(mapStateToProps)(Main)
