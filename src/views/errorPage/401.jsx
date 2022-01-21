
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import { Button, Row, Col, Modal } from 'antd'

import errGif from '@imgs/401_images/401.gif'

import './styles/401.less'

const Page404 = ( props ) => {
  const navigate = useNavigate()
  const [isModalVisible, setIsModalVisible] = useState( false )

  const backToHome = () => {
    navigate( '/' )
  }

  const showModal = ( e ) => {
    e.preventDefault()
    setIsModalVisible( true )
  }

  const hideModal = () => {
    setIsModalVisible( false )
  }

  const ewizardClap = 'https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646'

  return (
    <DocumentTitle title={'404'}>
      <div className='errPage-container'>
        <Button type='primary' onClick={ backToHome }>返回主页</Button>
        <Row>

          <Col span={12}>
            <h1 className='text-jumbo text-ginormous'>Oops!</h1>
            <h2>你没有权限去该页面</h2>
            <h6>如有不满请联系管理员</h6>
            <ul className='list-unstyled'>
              <li>或者你可以去:</li>
              <li className='link-type'>
                <Link to='/'>回首页</Link>
              </li>
              <li className='link-type'>
                <a href='https://github.com/mvpyb'>去我主页</a>
              </li>
              <li><a href='#!' onClick={showModal}>点我看图</a></li>
            </ul>
          </Col>

          <Col span={12}>
            <img src={ `${errGif}?s=${new Date().valueOf()}` } width='313' height='428' alt='Girl has dropped her ice cream.' />
          </Col>

        </Row>

        <Modal
          onCancel={ hideModal }
          visible={isModalVisible} title={ '随便看' } wrapClassName='more-imgs' footer={ null }>
          <img src={ewizardClap} className='pan-img' />
        </Modal>

      </div>
    </DocumentTitle>
  )
}

export default Page404
