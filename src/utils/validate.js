
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal( path ) {
  return /^(https?:|mailto:|tel:)/.test( path )
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validPhone( str ) {
  var pass = false
  var val = str.trim()
  if ( !/^(0|86|17951)?(13[0-9]|14[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9|19[0-9])[0-9]{8}$/i.test( val ) ) {
    pass = false
  } else {
    pass = true
  }
  return pass
}
/**
 * 验证手机号和固话  或者400 电话  40066-95566
    区号：前面一个0，后面跟2-3位数字 ： 0\d{2,3} 电话号码：7-8位数字： \d{7,8} 分机号：一般都是3位数字： \d{3,}
 * @param {string} str
 * @returns {Boolean}
 */
export function validPhone1( str ) {
  var pass
  var val = str.trim()
  if (
    /^(0|86|17951)?(1[0-9])[0-9]{9}$/i.test( val ) ||
    /^((0\d{2,3})-)(\d{7,8})(-(\d{3,4}))?$/.test( val ) ||
    /^([0-9])([0-9\-]){1,15}$/.test( val ) && /[0-9]/.test( val )
  ) {
    pass = true
  } else {
    pass = false
  }
  return pass
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validCode( str ) {
  var pass = false
  var val = str.trim()
  var reg = new RegExp( /^\d{6}$/ )
  if ( !reg.test( val ) ) {
    pass = false
  } else {
    pass = true
  }
  return pass
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername( str ) {
  var pass = false
  var val = str.trim()
  if ( !val || val == null || val == undefined ) {
    pass = false
  } else if ( val.length > 15 ) {
    pass = false
  } else {
    pass = true
  }
  return pass
}

export function validateSnCode( val ) {
  return true
}

/**
 * @param {string} str
 * @returns {Boolean}
 * [\f\t\n\r\v\123\x7F\x{10FFFF} \\\^\$\.\*\+\?\{\}\(\)\[\]\|]
 */
export function validPasswrod( str ) {
  // const reg = /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]{8,16}$/
  // eslint-disable-next-line no-useless-escape
  const reg = /^(?![a-zA-z]+$)(?!\d+$)(?![\\\^\$\.\*\+\?\{\}\(\)\[\]\|]+$)[a-zA-Z\d\\\^\$\.\*\+\?\{\}\(\)\[\]\|]{8,16}$/
  return reg.test( str )
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL( url ) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test( url )
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase( str ) {
  const reg = /^[a-z]+$/
  return reg.test( str )
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase( str ) {
  const reg = /^[A-Z]+$/
  return reg.test( str )
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets( str ) {
  const reg = /^[A-Za-z]+$/
  return reg.test( str )
}

/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail( email ) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,50}))$/
  return reg.test( email ) && !/[\u4e00-\u9fa5]/.test( email )
}

/**
 * 验证中英文和数字 1-15位
 * @returns {Boolean}
 */
export function validTeamName( val ) {
  const reg = /^([0-9]|[a-zA-Z]|[\u4e00-\u9fa5]){1,15}$/
  return reg.test( val )
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString( str ) {
  if ( typeof str === 'string' || str instanceof String ) {
    return true
  }
  return false
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray( arg ) {
  if ( typeof Array.isArray === 'undefined' ) {
    return Object.prototype.toString.call( arg ) === '[object Array]'
  }
  return Array.isArray( arg )
}

/**
 * 验证文件大小
 * @params size[文件大小]
 * @params max[文件最大限制]
 * @params max[文件最大限制的单位值 默认MB]
 * @return field[ false 不通过， true 通过]
 */
export function validateFileSize( size, max, field = 'MB' ) {
  // eslint-disable-next-line no-unused-vars
  let sizeNum = 0
  if ( field === 'KB' ) {
    sizeNum = size / 1024
  } else if ( field === 'MB' ) {
    sizeNum = size / 1024 / 1024
  } else if ( field === 'GB' ) {
    sizeNum = size / 1024 / 1024 / 1024
  } else {
    sizeNum = size / 1024 / 1024
  }
  if ( sizeNum > max ) {
    return false
  }
  return true
}
