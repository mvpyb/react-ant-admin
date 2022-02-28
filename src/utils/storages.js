
import { STORAGE_PREFIX } from '@/config/constant'

class StorageProxy {
  constructor( storageModel ) {
    this.storage = storageModel
  }

  set( key, value ) {
    const { storage } = this
    if ( key ) {
      // eslint-disable-next-line no-param-reassign
      key = `${STORAGE_PREFIX}_${key}`
      const data = JSON.stringify( value )
      storage.setItem( key, data )
    }
  }

  get( key ) {
    const { storage } = this
    if ( key ) {
      // eslint-disable-next-line no-param-reassign
      key = `${STORAGE_PREFIX}_${key}`
      let data = storage.getItem( key )
      if ( data == '' || data == null || JSON.stringify( data ) == '{}' ) {
        data = ''
      } else {
        const result = JSON.parse( data )
        const { expiration } = result
        // 如果过期时间存在并已经过期 则删除
        if ( expiration && expiration <= new Date().valueOf() ) {
          this.remove( key )
          data = ''
        } else {
          data = result
        }
      }
      return data
    } else {
      return null
    }
  }

  remove( key, isAll = false ) {
    const { storage } = this
    if ( key ) {
      if ( isAll ) {
        this.clear()
      } else {
        // eslint-disable-next-line no-param-reassign
        key = `${STORAGE_PREFIX}_${key}`
        storage.removeItem( key )
      }
    }
  }

  clear() {
    this.storage.clear()
  }
}

// eslint-disable-next-line no-unused-vars
class localStorageProxy extends StorageProxy {
  // eslint-disable-next-line no-useless-constructor
  constructor( localStorage ) {
    super( localStorage )
  }
}

// eslint-disable-next-line new-cap
export const sessionStorageHandle = new StorageProxy( window.sessionStorage )

// eslint-disable-next-line new-cap
export const localStorageHandle = new StorageProxy( window.localStorage )
