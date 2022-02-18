
import React, { useState } from 'react'
import clip from '@utils/clipboard'
import {
  Button, Row, Col, Card, Input
} from 'antd'
const { TextArea } = Input

import { CopyOutlined } from '@ant-design/icons'

const handleCopy = ( text, event ) => {
  clip( text, event )
}

const defaultText = 'React Antd Admin 是一个免费开源的中后台模版。使用了最新的`react 17.x`,`react-router 6.x`,`@reduxjs/toolkit`,`antd4.x`等主流技术开发，开箱即用的中后台前端解决方案，也可用于学习参考。模板集成了基础权限、国际化以及各种常用组件。More : https://github.com/mvpyb/react-antd-admin'

const Clipboard = () => {
  const [text, setText] = useState( defaultText )
  return (
    <div className={'app-container'}>
      <Row gutter={16}>

        <Col className='gutter-row' span={12}>
          <div className='clipboard-section'>
            <Card title='文字复制' >
              <p>{ defaultText }</p>
              <Button
                type='primary'
                icon={ <CopyOutlined /> }
                onClick={( e ) => {
                  handleCopy( defaultText, e )
                }}
              >
                Copy
              </Button>
            </Card>
          </div>
        </Col>

        <Col className='gutter-row' span={12}>
          <div className='clipboard-section'>
            <Card title='表单复制'>
              <div style={{ marginBottom : '5px' }}>
                <TextArea
                  autoSize={true}
                  showCount
                  value={text}
                  onChange={ ( e ) => {
                    setText( e.target.value )
                  } }
                />
              </div>
              <Button
                type='primary'
                icon={ <CopyOutlined /> }
                onClick={( e ) => {
                  handleCopy( text, e )
                }}
              >
                Copy
              </Button>
            </Card>
          </div>
        </Col>

      </Row>
    </div>
  )
}

export default Clipboard
