
import React from 'react'
import { Layout } from 'antd'
import { Outlet, useLocation } from 'react-router-dom'
import '@/styles/transition.less'
import './main.less'

const { Content } = Layout

import { CSSTransition, TransitionGroup } from 'react-transition-group'

const BaseLayout = () => {
  const location = useLocation()
  return (
    <Content className={ 'main-section' }>
      {/* 动画 styles-transition.less => forward-from-right back-to-right fade-in fade-transform*/}
      <TransitionGroup
        className={'main-wrapper'}
        childFactory={child => React.cloneElement( child, { classNames : 'forward-from-right' } )}
      >
        <CSSTransition timeout={500} key={location.pathname}>
          <div className={ 'main-content' }>
            <Outlet />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Content>
  )
}

export default BaseLayout
