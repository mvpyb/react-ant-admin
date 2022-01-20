
export function getEnvs() {
  const env = process.env.NODE_ENV
  const { href } = window.location
  let envStr = ''
  if ( env === 'development' ) {
    envStr = 'dev'
  } else {
    if ( href.indexOf( 'fat' ) >= 0 ) {
      envStr = 'fat'
    } else if ( href.indexOf( 'uat' ) >= 0 ) {
      envStr = 'uat'
    } else {
      envStr = 'pro'
    }
  }
  return envStr
}
