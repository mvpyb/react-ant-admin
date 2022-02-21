
import React from 'react'

import { Card, Progress } from 'antd'
import { connect } from 'react-redux'
import PanThumb from '@/components/PanThumb'
import Mallki from '@/components//Mallki'

import './index.less'

const boxCardList = [
  {
    id : 1,
    title : 'JavaScript',
    percent : 100
  },
  {
    id : 2,
    title : 'React',
    percent : 98
  },
  {
    id : 3,
    title : 'React-Router',
    percent : 98
  },
  {
    id : 4,
    title : 'Redux',
    percent : 88
  },
  // {
  //   id : 5,
  //   title : 'Vue',
  //   percent : 96
  // },
  {
    id : 6,
    title : 'Webpack',
    percent : 88
  }
]

const BoxCard = ( props ) => {
  const { avatar } = props

  return (
    <Card
      className='box-card-component'
      title={
        <div className='box-card-header'>
          <img src='https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png'/>
        </div>
      }
    >

      <div style={{ position : 'relative' }}>

        <PanThumb image={avatar} className='panThumb' />

        <Mallki className='mallki-text' text='灰是小灰灰的灰' />

        <div style={{ paddingTop : '35px' }} >
          {
            boxCardList.map( list => {
              return (
                <div key={list.id} className='progress-item'>
                  <span>{list.title}</span>
                  <Progress percent={ list.percent } />
                </div>
              )
            } )
          }
        </div>

      </div>

    </Card>
  )
}

const mapStateToProps = state => {
  return {
    ...state.users
  }
}
export default connect( mapStateToProps )( BoxCard )
