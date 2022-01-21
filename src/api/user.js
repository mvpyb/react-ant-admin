
import { request } from '@utils/request'

export function getUserInfo( data ) {
  return request( {
    // url : '/user/tokenLogin',
    url : '/userInfo',
    method : 'post',
    data
  } )
}

export function logOut( data ) {
  return request( {
    url : '/logout',
    method : 'post',
    data
  } )
}
