import React from 'react'
import PropTypes from 'prop-types'
import './index.less'

const SvgIcon = ( props ) => {
  const { iconClass, className } = props

  const styleExternalIcon = {
    mask : `url(${iconClass}) no-repeat 50% 50%`,
    WebkitMask : `url(${iconClass}) no-repeat 50% 50%`
  }
  const iconName = `#icon-${iconClass}`
  const svgClass = className ? 'svg-icon ' + className : 'svg-icon'
  const isExternal = ( path ) => /^(https?:|mailto:|tel:)/.test( path )
  return (
    <>
      {isExternal( iconClass )
        ? <div style={styleExternalIcon} className={`svg-external-icon ${svgClass}`} />
        : <svg className={svgClass} aria-hidden='true'>
          <use xlinkHref={iconName} />
        </svg>
      }
    </>
  )
}

SvgIcon.propTypes = {
  iconClass : PropTypes.string.isRequired,
  className : PropTypes.string
}

export default SvgIcon
