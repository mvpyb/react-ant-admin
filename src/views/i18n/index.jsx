
import React, { useState, useEffect } from 'react'
import { Row, Col, Card, Alert, Radio, List } from 'antd'
import { useTitle } from 'ahooks'

// hook 用法
// import { useTranslation } from 'react-i18next'

// HOC 用法
import { withTranslation } from 'react-i18next'

const I18n = ({ t, i18n }) => {
  useTitle('国际化')
  const [lang, setLang] = useState('zh')
  const radioChange = (e) => {
    setLang(e.target.value)
  }

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [lang])

  const data = [
    {
      title: 'web RTC',
      content: 'i18n.webRTC',
      more: 'https://developer.mozilla.org/zh-CN/docs/Glossary/WebRTC'
    },
    {
      title: 'webGL',
      content: 'i18n.WebGL',
      more: 'https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API'
    }
  ]

  return (
      <div className={'app-container'}>
        <Row gutter={16}>
          <Col span={24}>
            <div>
              <Card title={t('i18n.title')} style={{ width: 600, margin: '50px auto' }} hoverable>
                <Radio.Group value={lang} buttonStyle='solid' onChange={ (e) => radioChange(e) }>
                  <Radio.Button value='zh'>中文</Radio.Button>
                  <Radio.Button value='en'>English</Radio.Button>
                  <Radio.Button value='es'>Español</Radio.Button>
                  <Radio.Button value='ja'>日本語</Radio.Button>
                </Radio.Group>
                <Alert message={t('i18n.note')} type='info' style={{ marginTop: '50px' }} />
              </Card>
            </div>
          </Col>

          <Col span={24}>
            <div>
              <List
                itemLayout='horizontal'
                dataSource={data}
                renderItem={item => (
                  <List.Item>
                    <List.Item.Meta
                      title={<a href={ item.more } target={'_blank'} rel='noreferrer'>{item.title}</a>}
                      description={t(item.content)}
                    />
                  </List.Item>
                )}
              />
            </div>
          </Col>

        </Row>
      </div>
  )
}

export default withTranslation()(I18n)
