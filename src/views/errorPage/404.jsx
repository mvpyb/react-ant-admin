
import React from 'react'
import { useNavigate } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import img404 from '@/assets/imgs/404_images/404.png'
import cloud from '@/assets/imgs/404_images/404_cloud.png'
import './styles/404.less'

const Page404 = () => {
  const navigate = useNavigate()
  const backToHome = ( e ) => {
    e.preventDefault()
    navigate( '/' )
  }
  return (
    <DocumentTitle title={'404'} >
      <div className={ `wscn-http-404container app-container` }>
        <div className={ 'wscn-http404' }>
          <div className={ 'pic-404' }>
            <img className='pic-404__parent' src={img404} alt='404'/>
            <img className='pic-404__child left' src={cloud} alt='404'/>
            <img className='pic-404__child mid' src={cloud} alt='404'/>
            <img className='pic-404__child right' src={cloud} alt='404'/>
          </div>
          <div className='bullshit'>
            <div className='bullshit__oops'>404!</div>
            <div className='bullshit__info'>版权所有</div>
            <div className='bullshit__headline'>您访问的页面不见了...</div>
            <div className='bullshit__info'>请检查您输入的网址是否正确，或者点击下面的按钮返回首页。</div>
            <a href='#!' className='bullshit__return-home' onClick={backToHome}>返回首页</a>
          </div>
        </div>
      </div>
    </DocumentTitle>
  )
}

export default Page404
