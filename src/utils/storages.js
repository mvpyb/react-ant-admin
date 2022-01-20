class sessionStorageProxy {
  constructor( storageModel ) {
    this.storage = storageModel
  }
  set( key, value ) {
    const { storage } = this
    if ( key ) {
      const data = JSON.stringify( value )
      storage.setItem( key, data )
    }
  }

  get( key ) {
    const { storage } = this
    if ( key ) {
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
        storage.removeItem( key )
      }
    }
  }

  clear() {
    this.storage.clear()
  }
}

class localStorageProxy extends sessionStorageProxy {
  // eslint-disable-next-line no-useless-constructor
  constructor( localStorage ) {
    super( localStorage )
  }
}

// eslint-disable-next-line new-cap
export const sessionStorageHandle = new sessionStorageProxy( window.sessionStorage )

// eslint-disable-next-line new-cap
export const localStorageHandle = new localStorageProxy( window.localStorage )
