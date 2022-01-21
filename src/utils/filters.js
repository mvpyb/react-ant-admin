
// 根据参数截取字符串
export function subStringStr( value, len ) {
  if ( !value ) return ''
  return ( value.length > len ? value.substring( 0, len ) + '...' : value )
}
