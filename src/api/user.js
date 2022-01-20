
import { request } from '@utils/request'

export function getUserInfo( data ) {
  return request( {
    // url : '/user/tokenLogin',
    url : '/userInfo',
    method : 'post',
    data
  } )
}
