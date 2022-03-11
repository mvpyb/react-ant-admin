
import { createSlice } from '@reduxjs/toolkit'
import { getCookie, addCookie } from '@/utils/cookies'

export const initialState = {
  sidebarStatus : getCookie( 'sidebarStatus' ) ? !!+getCookie( 'sidebarStatus' ) : true,
  device : 'desktop'
}

export const appSlice = createSlice( {
  name : 'app',
  initialState,
  reducers : {
    TOGGLE_SIDEBAR : state => {
      state.sidebarStatus = !state.sidebarStatus

      if ( state.sidebarStatus ) {
        addCookie( 'sidebarStatus', 1 )
      } else {
        addCookie( 'sidebarStatus', 0 )
      }
    },
    CLOSE_SIDEBAR : state => {
      state.sidebarStatus = false
      addCookie( 'sidebarStatus', 0 )
    },
    TOGGLE_DEVICE : ( state, { payload : device } ) => {
      state.device = device
    }
  }

} )

export const { TOGGLE_SIDEBAR, CLOSE_SIDEBAR, TOGGLE_DEVICE } = appSlice.actions
export default appSlice.reducer
