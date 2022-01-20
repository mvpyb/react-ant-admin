import request from '@utils/request'

export function login( data ) {
  return request.request( {
    method : 'post',
    url : '/user/accountLogin',
    data
  } )
}

export function getUserInfo( data ) {
  return request.request( {
    method : 'post',
    url : '/user/tokenLogin',
    data
  } )
}

export function reqLogin( data ) {
  return request( {
    url : '/login',
    method : 'post',
    data
  } )
}

export function reqLogout( data ) {
  return request( {
    url : '/logout',
    method : 'post',
    data
  } )
}
