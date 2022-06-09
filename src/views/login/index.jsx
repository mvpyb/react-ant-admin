
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import DocumentTitle from 'react-document-title'
import styles from './index.module.less'
import { Spin } from 'antd'
import Logo from './logo'
import PasswordLogin from './passwordLogin'
// TODO 此页面写了内置了国际化的基础功能，其他页面如果想要集成国际化，可参考此处

const Login = ( { t } ) => {
  const [loading, setLoading] = useState( false )
  const navigate = useNavigate()

  const loginStart = () => {
    setLoading( true )
  }

  const loginSuccess = async() => {
    navigate( '/' )
  }
  const loginFailed = () => {
    // setLoading( false )
  }

  return (
    <DocumentTitle title= {t( 'login.title' )}>
      <div className={`${styles.loginContainer} un-select`}>
        <div className={`${styles.body} ${styles.fixWidth}`}>
          <div className={styles.top}>
            <Logo className={styles.logos} />
            <div className={styles.desc}> {t( 'login.subTitle' )}</div>
          </div>
          <div className={styles.main}>
            <Spin spinning={loading} tip={ t( 'login.loading' ) }>
              <PasswordLogin
                loginFailed={ loginFailed }
                loginSuccess={ loginSuccess }
                loginStart={ loginStart }
              />
            </Spin>
          </div>
          <div className={styles.footer}>
            <div className={styles.desc}/>
          </div>
        </div>
      </div>
    </DocumentTitle>
  )
}

export default withTranslation()( Login )
