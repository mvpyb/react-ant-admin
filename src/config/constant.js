
const WX_APP_ID = 'appid'
const STORAGE_PREFIX = 'rad_'
const COOKIE_PREFIX = 'rad_'

const GLOBAL_DATA = {
  env : 'fat',
  proxy_url : 'https://webapi-fat.shadowcreator.com',
  dev : {
    // 'baseUrl' : '/api/100026'
    'baseUrl' : '/dev-api'
  },
  fat : {
    'baseUrl' : 'http://webapi-fat.shadowcreator.com/100026'

  },
  uat : {
    'baseUrl' : 'http://webapi-uat.shadowcreator.com/100026'
  },
  pro : {
    'baseUrl' : 'http://webapi.shadowcreator.com/100026'
  }
}

const WHITE_CODE_LIST = [
  {
    code : 200,
    msg : ''
  }
]

const LOGIN_ERROR_CODE = [
  {
    code : 5004,
    msg : '无效token'
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
