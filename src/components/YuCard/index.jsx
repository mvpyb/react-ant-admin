
import React from 'react'
import PropTypes from 'prop-types'

// see more : https://www.npmjs.com/package/react-countup/v/2.0.0
import CountUp from 'react-countup'

import './index.less'

const YuCard = ( props ) => {
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
    <div className='content-section bg-primary card-item'>
      <div className='card-body'>
        <div className={'card-body-icon'}>
          { props.icon }
        </div>

        <div className={'text-white'}>
          <h6 className='text-uppercase text-white'>{title}</h6>

          <h2 className='text-white mb24'>
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

          <div className='badge-box'>
            { props.badge }
          </div>
          <div className='card-info'>
            { props.info }
          </div>
        </div>

      </div>
    </div>
  )
}

// props校验
YuCard.propTypes = {
  start : PropTypes.number,
  end : PropTypes.number,
  duration : PropTypes.number,
  decimals : PropTypes.number,
  title : PropTypes.string,
  prefix : PropTypes.string,
  suffix : PropTypes.string,
  decimal : PropTypes.string,
  separator : PropTypes.string
}

export default YuCard
