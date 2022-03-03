import React from 'react'
import { PropTypes } from 'prop-types'
import styles from './index.module.less'

const PanThumb = ( props ) => {
  const {
    image, zIndex, width, height, className
  } = props
  return (
    <div
      className={`${styles.panItem} ${className}`}
      style={{
        zIndex,
        height,
        width
      }}
    >
      <div className={ styles.panInfo }>
        <div className={ styles.panInfoRolesContainer }>{props.children}</div>
      </div>
      <img src={image} className={ styles.panThumb } alt='' />
    </div>
  )
}

PanThumb.propTypes = {
  image : PropTypes.string.isRequired,
  zIndex : PropTypes.number,
  width : PropTypes.string,
  height : PropTypes.string,
  className : PropTypes.string
}

PanThumb.defaultProps = {
  width : '150px',
  height : '150px',
  zIndex : 1,
  className : ''
}

export default PanThumb
