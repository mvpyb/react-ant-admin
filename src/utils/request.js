
/**
 * @Description: axios封装
 * @Author: 灰是小灰灰的灰
 * @Email: 454539387@qq.com
 * @Date: 2021-07-06 11:49:40
 * @LastEditors: 灰是小灰灰的灰
 * @LastEditTime: 2021-07-06 11:49:40
 */
'use strict'
import axios from 'axios'
import { message as AntMessage } from 'antd'
import { getEnvs } from '@utils/env'
import { getCookie } from '@utils/cookies'
import {
  TOKEN,
  WHITE_CODE_LIST,
  LOGIN_ERROR_CODE,
  GLOBAL_DATA
} from '@config/constant'

// import store from '@/store'
// import router from '@/router'
// import qs from 'qs'

class HttpRequest {
  // #baseUrl
  constructor() {
    this.baseUrl = this.getBaseUrl()
    this.withCredentials = false
    this.timeout = 10000
  }

  getBaseUrl() {
    const env = getEnvs()
    return GLOBAL_DATA[env]['baseUrl']
  }

  getConfig() {
    const config = {
      baseURL : this.baseUrl,
      timeout : this.timeout,
      withCredentials : this.withCredentials,
      headers : {
        'Content-Type' : 'application/json;charset=UTF-8'
      }
    }
    return config
  }

  getParams( payload ) {
    const { method, data } = payload
    if ( ['post', 'put', 'patch', 'delete'].indexOf( method ) >= 0 ) {
      payload.data = data
    } else {
      payload.params = data
      delete payload.data
    }
    return payload
  }

  checkStatus( status ) {
    let errMessage = ''
    switch ( status ) {
      case 400:
        errMessage = '错误请求'
        break
      case 401:
        errMessage = '未授权，请重新登录'
        break
      case 403:
        errMessage = '拒绝访问'
        break
      case 404:
        errMessage = '请求错误,未找到该资源'
        break
      case 405:
        errMessage = '请求方法未允许'
        break
      case 408:
        errMessage = '请求超时'
        break
      case 500:
        errMessage = '服务器端出错'
        break
      case 501:
        errMessage = '网络未实现'
        break
      case 502:
        errMessage = '网络错误'
        break
      case 503:
        errMessage = '服务不可用'
        break
      case 504:
        errMessage = '网络超时'
        break
      case 505:
        errMessage = 'http版本不支持该请求'
        break
      default:
        errMessage = `连接错误`
    }
    return errMessage
  }

  // 拦截处理
  setInterceptors( instance ) {
    const that = this

    // 请求拦截
    instance.interceptors.request.use(
      ( config ) => {
        if ( !navigator.onLine ) {
          AntMessage( {
            message : '请检查您的网络是否正常',
            type : 'error',
            duration : 3 * 1000
          } )
          return Promise.reject( '请检查您的网络是否正常' )
        }
        console.log( 'getCookie', getCookie( TOKEN ) )
        // config.headers.token = getCookie( TOKEN ) || ''
        config.headers.common['token'] = getCookie( TOKEN ) || ''
        // config.data = qs.stringify(config.data)

        return config
      },
      ( error ) => {
        return Promise.reject( error )
      }
    )

    // 响应拦截
    instance.interceptors.response.use(
      ( res ) => {
        const result = res.data
        const type = Object.prototype.toString.call( result )
        // 如果是文件流 直接返回
        if ( type === '[object Blob]' || type === '[object ArrayBuffer]' ) {
          return result
        } else {
          const { code, message } = result
          const isErrorToken = LOGIN_ERROR_CODE.find( item => item.code == code )
          const isWhiteCode = WHITE_CODE_LIST.find( item => item.code == code )

          if ( isErrorToken ) {
            // token已过期 跳转到登录

            // store.dispatch( 'user/logout' )
            // router.push( `/login` )
            // window.location.reload()
          } else if ( !isWhiteCode ) {
            AntMessage( {
              message : message || 'Error',
              type : 'error',
              duration : 3 * 1000
            } )
            return Promise.reject( message || 'Error' )
          } else {
            return result
          }
        }
      },
      ( error ) => {
        if ( error && error.response ) {
          error.message = that.checkStatus( error.response.status )
        }
        const isTimeout = error.message.includes( 'timeout' )
        AntMessage( {
          message : isTimeout
            ? '网络请求超时'
            : error.message || '连接到服务器失败',
          type : 'error',
          duration : 2 * 1000
        } )
        return Promise.reject( error.message )
      }
    )
  }

  request( options ) {
    const instance = axios.create()
    const baseOpt = this.getConfig()
    const params = Object.assign( {}, baseOpt, this.getParams( options ) )
    this.setInterceptors( instance )
    return instance( params )
  }
}

const http = new HttpRequest()
export default http

// import axios from 'axios'
// import store from '@/store'
// import { Modal } from 'antd'
// import { getToken } from '@utils/cookies'
// import { logout } from '@/store/actions'
//
// // 创建一个axios示例
// const service = axios.create( {
//   baseURL : process.env.REACT_APP_BASE_API, // api 的 base_url
//   timeout : 5000 // request timeout
// } )
//
// // 请求拦截器
// service.interceptors.request.use(
//   ( config ) => {
//     // TODO
//     // // Do something before request is sent
//     // if ( store.getState().user.token ) {
//     //   // 让每个请求携带token-- ['Authorization']为自定义key 请根据实际情况自行修改
//     //   config.headers.Authorization = getToken() || ''
//     // }
//     return config
//   },
//   ( error ) => {
//     // Do something with request error
//     console.log( error ) // for debug
//     Promise.reject( error )
//   }
// )
//
// // 响应拦截器
// service.interceptors.response.use(
//   ( response ) => response,
//   /**
//    * 下面的注释为通过在response里，自定义code来标示请求状态
//    * 当code返回如下情况则说明权限有问题，登出并返回到登录页
//    * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
//    * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
//    */
//   // response => {
//   //   const res = response.data
//   //   if (res.code !== 20000) {
//   //     Message({
//   //       message: res.message,
//   //       type: 'error',
//   //       duration: 5 * 1000
//   //     })
//   //     // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
//   //     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
//   //       // 请自行在引入 MessageBox
//   //       // import { Message, MessageBox } from 'element-ui'
//   //       MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
//   //         confirmButtonText: '重新登录',
//   //         cancelButtonText: '取消',
//   //         type: 'warning'
//   //       }).then(() => {
//   //         store.dispatch('FedLogOut').then(() => {
//   //           location.reload() // 为了重新实例化vue-router对象 避免bug
//   //         })
//   //       })
//   //     }
//   //     return Promise.reject('error')
//   //   } else {
//   //     return response.data
//   //   }
//   // },
//   ( error ) => {
//     // TODO
//     // console.log( 'err', error ) // for debug
//     // const { status } = error.response
//     // if ( status === 403 ) {
//     //   Modal.confirm( {
//     //     title : '确定登出?',
//     //     content :
//     //       '由于长时间未操作，您已被登出，可以取消继续留在该页面，或者重新登录',
//     //     okText : '重新登录',
//     //     cancelText : '取消',
//     //     onOk() {
//     //       const { token } = store.getState().user
//     //       store.dispatch( logout( token ) )
//     //     },
//     //     onCancel() {
//     //       console.log( 'Cancel' )
//     //     }
//     //   } )
//     // }
//     return Promise.reject( error )
//   }
// )
//
// export default service
