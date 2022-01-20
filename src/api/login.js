
import { request } from '@utils/request'

// 此处接入的是真实接口
// export function login( data ) {
//   return request( {
//     method : 'post',
//     url : '/user/accountLogin',
//     data
//   } )
// }

export function login( data ) {
  return request( {
    url : '/login',
    method : 'post',
    data
  } )
}
