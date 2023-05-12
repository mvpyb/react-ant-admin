
import React from 'react'
import SvgIcon from '@/components/SvgIcon'
import { Row, Col, Carousel } from 'antd'
import styles from './index.cjs'

const YuWeather = ( props ) => {
  return (
    <div className={ styles.card }>
      <div className={ styles.citySelected }>

        <Row gutter={0} className={'table-list'}>
          <Col span={14}>
            <div className='info'>
              <div className='city'>
                <span>City:</span>
                Shang Hai
              </div>
              <div className='night'>Day - 14:05 PM</div>
              <div className='temperature'>34°</div>
            </div>
          </Col>
          <Col span={10}>
            <div className='icon'>
              <SvgIcon iconClass='rain' className='panel-icon'/>
            </div>
          </Col>
        </Row>
      </div>

      <table className={`${styles.table} ${styles.tableStriped}`}>
        <tbody>
          <tr>
            <td>Wind</td>
            <td className='font-medium'>ESE 16 mph</td>
          </tr>
          <tr>
            <td>Humidity</td>
            <td className='font-medium'>66%</td>
          </tr>
          <tr>
            <td>Pressure</td>
            <td className='font-medium'>28.18 in</td>
          </tr>
          <tr>
            <td>Cloud Cover</td>
            <td className='font-medium'>65%</td>
          </tr>
          <tr>
            <td>Ceiling</td>
            <td className='font-medium'>25380 ft</td>
          </tr>
        </tbody>
      </table>

      <div className={ styles.weekWeather }>
        <Carousel autoplay dots={false} className={ styles.weekWeather }>
          <ul className='days-list'>
            <li className='day'>
              <p>Monday</p>
              <SvgIcon iconClass='cloudy' className='panel-icon'/>
            </li>
            <li className='day'>
              <p>Tuesday</p>
              <SvgIcon iconClass='overcast' className='panel-icon'/>
            </li>
            <li className='day'>
              <p>Wednesday</p>
              <SvgIcon iconClass='sun' className='panel-icon'/>
            </li>
          </ul>

          <ul className='days-list'>
            <li className='day'>
              <p>Thursday</p>
              <SvgIcon iconClass='wind' className='panel-icon'/>
            </li>
            <li className='day'>
              <p>Friday</p>
              <SvgIcon iconClass='overcast' className='panel-icon'/>
            </li>
            <li className='day'>
              <p>Saturday</p>
              <SvgIcon iconClass='rain' className='panel-icon'/>
            </li>
          </ul>

        </Carousel>
      </div>

    </div>
  )
}

export default YuWeather
