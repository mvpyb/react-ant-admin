import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.module.scss'

const SvgIcon = (props) => {
  const { iconClass, className } = props

  const styleExternalIcon = {
    mask: `url(${iconClass}) no-repeat 50% 50%`,
    WebkitMask: `url(${iconClass}) no-repeat 50% 50%`
  }
  const iconName = `#icon-${iconClass}`
  const isExternal = (path) => /^(https?:|mailto:|tel:)/.test(path)
  return (
    <>
      {isExternal(iconClass)
        ? <div style={styleExternalIcon} className={`${styles.svgExternalIcon} ${styles.svgIcon} ${className}`} />
        : <svg className={ `${styles.svgIcon} ${className}` } aria-hidden='true'>
          <use xlinkHref={iconName} />
        </svg>
      }
    </>
  )
}

SvgIcon.propTypes = {
  iconClass: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default SvgIcon
