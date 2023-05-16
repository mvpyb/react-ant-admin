
import { createSlice } from '@reduxjs/toolkit'
import defaultSettings from '@/defaultSettings'
import { getCookie, addCookie } from '@/utils/cookies'
const {
  showSettings, sidebarLogo, fixedHeader, tagsView, layoutMode
} = defaultSettings
const localLayoutMode = getCookie('layoutMode')

export const initialState = {
  showSettings,
  fixedHeader,
  sidebarLogo,
  tagsView,
  layoutMode: localLayoutMode || layoutMode
}

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    TOGGLE_FIX_HEADER: state => {
      state.fixedHeader = !state.fixedHeader
    },
    TOGGLE_SIDEBAR_LOGO: state => {
      state.sidebarLogo = !state.sidebarLogo
    },
    TOGGLE_TAGS_VIEW: state => {
      state.tagsView = !state.tagsView
    },
    // 全局设置布局模式 ： 默认 vertical， 侧边菜单布局 vertical， 顶部菜单布局 horizontal， 混合菜单布局 mix
    CHANGE_LAYOUT_MODE: (state, { payload: mode }) => {
      if (['vertical', 'horizontal', 'mix'].includes(mode)) {
        state.layoutMode = mode
      } else {
        state.layoutMode = 'vertical'
      }
      addCookie('layoutMode', state.layoutMode)
    }
  }

})

export const { TOGGLE_FIX_HEADER, TOGGLE_SIDEBAR_LOGO, TOGGLE_TAGS_VIEW, CHANGE_LAYOUT_MODE } = settingsSlice.actions
export default settingsSlice.reducer
