
import { createSlice } from '@reduxjs/toolkit'
import { isArray } from '@/utils/validate'

export const initialState = {
  tags: [],
  defaultTags: []
}

export const tagsSlice = createSlice({
  name: 'tagsView',
  initialState,
  reducers: {
    SET_DEFAULT_TAGS: (state, { payload: tag }) => {
      state.defaultTags = [
        ...tag
      ]
    },
    ADD_TAGS: (state, { payload: tag }) => {
      state.tags = [
        ...state.tags,
        tag
      ]
    },
    DELETE_TAGS: (state, { payload: tag }) => {
      state.tags = [
        ...state.tags.filter(v => v.path !== tag.path)
      ]
      // return {
      //   ...state,
      //   tags : [...state.tags.filter( v => v.path !== tag.path )]
      // }
    },
    CLEAR_ALL_TAGS: (state) => {
      state.tags = [
        ...state.tags.filter(v => v.unRemove)
      ]
    },
    CLOSE_OTHERS_TAGS: (state, { payload: tag }) => {
      state.tags = [
        ...state.tags.filter(v => v.unRemove || v.path === tag.path)
      ]
    },
    UPDATE_TAGS: (state, { payload: tag }) => {
      if (isArray(tag) && tag.length > 0) {
        tag.forEach(item => {
          const index = state.tags.findIndex(v => v.path === item.path)

          if (index > -1) {
            state.tags.splice(index, 1, {
              ...state.tags[index],
              ...item
            })
          } else {
            state.tags = [
              ...state.tags,
              item
            ]
          }
        })
      }
    }
  }

})

export const {
  ADD_TAGS, DELETE_TAGS, CLEAR_ALL_TAGS, CLOSE_OTHERS_TAGS, UPDATE_TAGS, SET_DEFAULT_TAGS
} = tagsSlice.actions
export default tagsSlice.reducer
