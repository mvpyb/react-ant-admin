
import React from 'react'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'
import YuCard from '@components/YuCard'

import BarChart from './components/BarChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'

import TransactionTable from './components/TransactionTable'
import YuStreetMap from '@/components/YuStreetMap'
import YuWeather from './components/YuWeather'
import TodoList from './components/TodoList'
import BoxCard from './components/BoxCard'

import './index.less'

import { Row, Col } from 'antd'

const cardList = [
  {
    id : 1,
    end : 6666,
    duration : 3,
    title : 'Order',
    icon : 'yu-icon-lifangti',
    badge : {
      className : 'bg-info',
      txt : '+56%'
    },
    info : 'From previous period'
  },
  {
    id : 2,
    end : 95270,
    duration : 3,
    prefix : '￥',
    decimals : 2,
    decimal : '.',
    title : 'Income',
    icon : 'yu-icon-chanpin1',
    badge : {
      className : 'bg-danger',
      txt : '+78%'
    },
    info : 'From previous period'
  },
  {
    id : 3,
    end : 666,
    duration : 1,
    prefix : '$',
    decimals : 2,
    decimal : '.',
    title : 'Average Price',
    icon : 'yu-icon-jiagebiaoqian',
    badge : {
      className : 'bg-warning',
      txt : '-5.2%'
    },
    info : 'From previous period'
  },
  {
    id : 4,
    end : 9527,
    duration : 3,
    title : 'Product Sold',
    icon : 'yu-icon-icon_xinyong_xianxing_jijin-129',
    badge : {
      className : 'bg-info',
      txt : '+22%'
    },
    info : 'From previous period'
  }
]

const Dashboard = ( props ) => {
  return (
    <DocumentTitle title={'dashboard页面'}>
      <div className='dashboard-editor-container un-select'>

        {/* 自定义card */}
        <Row gutter={16}>
          {
            cardList && cardList.map( ( list, index ) => {
              return (
                <Col sm={12} md={12} xl={6} key={index}>
                  <YuCard
                    end={list.end}
                    duration={list.duration}
                    decimals={list.decimals}
                    decimal={list.decimal}

                    prefix={list.prefix}
                    title={list.title}

                    icon={ <i className={`fr ${list.icon}`} />}
                    badge={ <span className={`badge ${list.badge.className}`}>{ list.badge.txt}</span>}
                    info={ list.info }
                  />
                </Col>
              )
            } )
          }
        </Row>

        {/* 自定义chat*/}
        <Row gutter={32} className={'chats-container'}>
          <Col xs={24} sm={24} lg={8}>
            <div className='chart-wrapper'>
              <RaddarChart />
            </div>
          </Col>
          <Col xs={24} sm={24} lg={8}>
            <div className='chart-wrapper'>
              <PieChart />
            </div>
          </Col>
          <Col xs={24} sm={24} lg={8}>
            <div className='chart-wrapper'>
              <BarChart />
            </div>
          </Col>
        </Row>

        {/* 表格示例 + map*/}
        <Row gutter={20} className={'table-list'}>
          <Col span={16}>
            <TransactionTable />
          </Col>

          <Col span={8}>
            <YuStreetMap />
          </Col>
        </Row>

        {/* user-info*/}
        <Row gutter={20} className={'user-info'}>
          <Col span={12}>
            <YuWeather />
          </Col>

          <Col span={6}>
            <TodoList />
          </Col>

          {/* TODO  此处还未编辑*/}
          <Col span={6}>
            <BoxCard />
          </Col>
        </Row>

      </div>
    </DocumentTitle>
  )
}

export default connect( ( state ) => state.users )( Dashboard )
