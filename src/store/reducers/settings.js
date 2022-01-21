
import { createSlice } from '@reduxjs/toolkit'
import defaultSettings from '@/defaultSettings'
// const { showSettings, sidebarLogo, fixedHeader, tagsView } = defaultSettings
const { fixedHeader, sidebarLogo } = defaultSettings

export const initialState = {
  fixedHeader,
  sidebarLogo
}

export const settingsSlice = createSlice( {
  name : 'settings',
  initialState,
  reducers : {
    TOGGLE_FIX_HEADER : state => {
      state.fixedHeader = !state.fixedHeader
    }
  }

} )

export const { TOGGLE_FIX_HEADER } = settingsSlice.actions
export default settingsSlice.reducer
