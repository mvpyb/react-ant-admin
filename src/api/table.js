import Mock from 'mockjs'
import { request } from '@/utils/request'

const list = []
const count = 20

for (let i = 0; i < count; i++) {
  list.push(Mock.mock({
    id: '@increment',
    title: '@ctitle(5, 10)',
    author: '@cname',
    readings: '@integer(300, 5000)',
    date: '@datetime'
  }))
}

const list2 = []
for (let i = 0; i < 7; i++) {
  list2.push(Mock.mock({
    id: i,
    date: '@date("yyyy-MM-dd")',
    name: '@cname',
    status: i % 2 ? 'Completed' : 'Pending',
    price: '@integer(300, 5000)',
    order_no: '@natural',
    address: '@county(true)'
  }))
}

export function getTableData() {
  return Promise.resolve({
    code: 200,
    message: 'success',
    data: {
      list: list
    }
  })
  // return request( {
  //   url : '/table/list',
  //   method : 'get'
  // } )
}

export function getDashboardList() {
  return Promise.resolve({
    code: 200,
    message: 'success',
    data: {
      list: list2
    }
  })

  //
  // return request( {
  //   url : '/table/dashboard',
  //   method : 'get'
  // } )
}
