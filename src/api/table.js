
import { request } from '@utils/request'

export function getTableData() {
  return request( {
    url : '/table/list',
    method : 'get'
  } )
}

export function getDashboardList() {
  return request( {
    url : '/table/dashboard',
    method : 'get'
  } )
}
