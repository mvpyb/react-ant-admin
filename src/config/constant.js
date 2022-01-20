
const WX_APP_ID = 'appid'
const STORAGE_PREFIX = 'rad_'
const COOKIE_PREFIX = 'rad_'
const TOKEN = `${COOKIE_PREFIX}token`

const GLOBAL_DATA = {
  env : 'fat',
  proxy_url : 'https://webapi-fat.shadowcreator.com',
  dev : {
    'baseUrl' : '/api/100026'
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

// exports.GLOBAL_DATA = GLOBAL_DATA;

module.exports = {
  WX_APP_ID,
  STORAGE_PREFIX,
  COOKIE_PREFIX,
  TOKEN,
  GLOBAL_DATA,
  WHITE_CODE_LIST,
  LOGIN_ERROR_CODE
}
