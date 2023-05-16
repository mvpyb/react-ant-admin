
import React from 'react'
import { PropTypes } from 'prop-types'
import styles from './index.module.scss'

const Mallki = (props) => {
  const { className, text } = props
  return (
    <a className={`${styles.mallki} ${className}`} href='#/'>
      {text}
      <span data-letters={text} />
      <span data-letters={text} />
    </a>
  )
}

Mallki.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string
}

Mallki.defaultProps = {
  className: '',
  text: 'react-ant-admin'
}

export default Mallki
