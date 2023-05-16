
import { request } from '@/utils/request'

export function getUserInfo(data) {
  return Promise.resolve({
    code: 200,
    message: 'success',
    data: {
      id: 'admin',
      roles: ['admin'],
      username: '灰是小灰灰的灰',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80',
      description: '我是超级管理员'
    }
  })

  // return request( {
  //   // url : '/user/tokenLogin',
  //   url : '/userInfo',
  //   method : 'post',
  //   data
  // } )
}

export function logOut(data) {
  return request({
    url: '/logout',
    method: 'post',
    data
  })
}
