import Cookies from 'js-cookie'
import { getEnvs } from '@utils/env'
const getEnv = getEnvs()

const { hostname } = window.location
const reg = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/
let cookiePreFix = ''
if ( hostname.indexOf( 'localhost' ) >= 0 || reg.test( hostname ) ) {
  cookiePreFix = 'fat_'
} else {
  if ( getEnv === 'fat' ) {
    cookiePreFix = 'fat_'
  } else if ( getEnv === 'uat' ) {
    cookiePreFix = 'uat_'
  } else {
    cookiePreFix = ''
  }
}
const cookieParams = {
  path : '/',
  domain : hostname,
  expires : 7
}

export function getCookie( key, off = false ) {
  const keyStr = off ? key : `${cookiePreFix}${key}`
  return Cookies.get( keyStr )
}

export function addCookie( key, value, params, off = false ) {
  const cookieParams = !params ? { ...cookieParams } : params
  const keyStr = off ? key : `${cookiePreFix}${key}`
  return Cookies.set( keyStr, value, cookieParams )
}

export function removeCookie( key, off = false ) {
  const keyStr = off ? key : `${cookiePreFix}${key}`
  return Cookies.remove( keyStr, cookieParams )
}

export function getAllCookies() {
  const cookies = document.cookie.split( /;\s/g )
  const cookieObj = {}
  cookies.forEach( function( item ) {
    const key = item.split( '=' )[0]
    cookieObj[key] = item.split( '=' )[1]
  } )
  return cookieObj
}

export function clearCookies() {
  const keys = Object.keys( getAllCookies() )
  keys.forEach( key => {
    removeCookie( key, true )
  } )
}

const TokenKey = 'Token'
export function getToken() {
  return Cookies.get( TokenKey )
}

export function setToken( token ) {
  return Cookies.set( TokenKey, token )
}

export function removeToken() {
  return Cookies.remove( TokenKey )
}
