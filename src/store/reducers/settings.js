
import { createSlice } from '@reduxjs/toolkit'
import defaultSettings from '@/defaultSettings'
const { showSettings, sidebarLogo, fixedHeader, tagsView } = defaultSettings

export const initialState = {
  showSettings,
  fixedHeader,
  sidebarLogo,
  tagsView
}

export const settingsSlice = createSlice( {
  name : 'settings',
  initialState,
  reducers : {
    TOGGLE_FIX_HEADER : state => {
      state.fixedHeader = !state.fixedHeader
    },
    TOGGLE_SIDEBAR_LOGO : state => {
      state.sidebarLogo = !state.sidebarLogo
    },
    TOGGLE_TAGS_VIEW : state => {
      state.tagsView = !state.tagsView
    }
  }

} )

export const { TOGGLE_FIX_HEADER, TOGGLE_SIDEBAR_LOGO, TOGGLE_TAGS_VIEW } = settingsSlice.actions
export default settingsSlice.reducer
