
import React from 'react'
import PropTypes from 'prop-types'

// see more : https://www.npmjs.com/package/react-countup/v/2.0.0
import CountUp from 'react-countup'
import styles from './index.module.scss'

const YuCard = (props) => {
  const {
    start = 1,
    end = 9527,
    duration = 3,
    decimals = 0, // 小数点后位数
    title = 'Title',
    separator = ',', // 分隔符
    decimal = '', // 指定十进制字符 10.00
    prefix = '',
    suffix = ''
  } = props

  return (
    <div className={ `${styles.bgPrimary} ${styles.cardItem}` }>
      <div className={styles.cardBody}>
        <div className={styles.cardBodyIcon}>
          { props.icon }
        </div>

        <div className={ styles.textWhite }>
          <h6 className={ `${styles.textUppercase} ${styles.textWhite}` }>{title}</h6>

          <h2 className={ `mb24 ${styles.textWhite}` }>
            <CountUp
              start={start}
              end={end}
              decimals={decimals}
              duration={duration}
              useEasing={true}
              separator={separator}
              decimal={decimal}
              prefix={prefix}
              suffix={suffix}
            />
          </h2>

          <div className={styles.badgeBox}>
            { props.badge }
          </div>
          <div className={styles.cardInfo}>
            { props.info }
          </div>
        </div>

      </div>
    </div>
  )
}

// props校验
YuCard.propTypes = {
  start: PropTypes.number,
  end: PropTypes.number,
  duration: PropTypes.number,
  decimals: PropTypes.number,
  title: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  decimal: PropTypes.string,
  separator: PropTypes.string
}

export default YuCard
