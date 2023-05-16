
const WX_APP_ID = 'appid'
const STORAGE_PREFIX = 'rad_'
const COOKIE_PREFIX = 'rad_'

const GLOBAL_DATA = {
  env: 'fat',
  proxy_url: '/',
  dev: {
    'baseUrl': '/api'
  },
  fat: {
    'baseUrl': '/'

  },
  uat: {
    'baseUrl': '/'
  },
  pro: {
    'baseUrl': '/'
  }
}

const WHITE_CODE_LIST = [
  {
    code: 200,
    msg: ''
  }
]

const LOGIN_ERROR_CODE = [
  {
    code: 5004,
    msg: '无效token'
  }
]

module.exports = {
  WX_APP_ID,
  STORAGE_PREFIX,
  COOKIE_PREFIX,
  GLOBAL_DATA,
  WHITE_CODE_LIST,
  LOGIN_ERROR_CODE
}
