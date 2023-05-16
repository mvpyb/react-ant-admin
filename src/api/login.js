
import { request } from '@/utils/request'

export function login(data) {
  return Promise.resolve({
    code: 200,
    message: 'success',
    data: {
      token: 'admin-token'
    }
  })

  // return request( {
  //   url : '/login',
  //   method : 'post',
  //   data
  // } )
}
