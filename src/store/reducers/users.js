
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCookie, addCookie, removeCookie } from '@utils/cookies'
import { COOKIE_PREFIX, TOKEN } from '@config/constant'
import { getUserInfo } from '@api/login'

export const initialState = {
  username : '',
  roles : [],
  avatar : '',
  token : getCookie( TOKEN ) || '',
  count : 0
}

// A slice for posts with our three reducers
export const userSlice = createSlice( {
  name : 'users',
  initialState,
  reducers : {
    setCount : ( state, { payload : count } ) => {
      state.count = state.count + count
    },
    setToken : ( state, { payload : token } ) => {
      state.token = token || ''
      addCookie( TOKEN, token )
    },
    setUserInfo : ( state, { payload : { roles, avatar, username }} ) => {
      console.log( 'setUserInfo', username )
      state.roles = roles
      state.avatar = avatar || ''
      state.username = username || ''

      addCookie( `${COOKIE_PREFIX}username`, username )
      addCookie( `${COOKIE_PREFIX}roles`, roles )
    },
    clearUserInfo : ( state ) => {
      state.roles = []
      state.avatar = ''
      state.username = ''
      state.token = ''

      removeCookie( `${COOKIE_PREFIX}username` )
      removeCookie( `${COOKIE_PREFIX}roles` )
      removeCookie( `${COOKIE_PREFIX}token` )
    }
  },

  // TODO https://zhuanlan.zhihu.com/p/382487951
  extraReducers : ( builder ) => {
    builder.addCase( getUserInfoSlice.pending, () => {
      // console.log('pending 进行中');
    } )
    builder.addCase( getUserInfoSlice.fulfilled, ( state, { payload } ) => {
      // console.log( 'fulfilled', payload, state );
      userSlice.actions.setUserInfo( {
        // ...payload,
        username : payload.username || payload.nickName || payload.phone,
        avatar : payload.avatar || '',
        roles : ['admin']
      } )
    } )
    builder.addCase( getUserInfoSlice.rejected, ( state, action ) => {
      userSlice.actions.clearUserInfo()
    } )
  }

} )

export const { setCount, setToken, setUserInfo, clearUserInfo } = userSlice.actions

// 异步请求
export const asyncGetInfo = payload => async( dispatch ) => {
  const { code, data } = await getUserInfo()
  console.log( 'asyncGetInfo', data )
  if ( code == 200 ) {
    dispatch( setUserInfo( {
      ...data,
      username : data.username || data.nickName || data.phone,
      roles : data.roles && data.roles > 0 ? ['admin'] : []
    } ) )
    return data
  } else {
    dispatch( clearUserInfo() )
    return {}
  }
}

// 文档 ： https://redux-toolkit.js.org/api/createAsyncThunk
export const getUserInfoSlice = createAsyncThunk(
  'user/getUserInfo',
  async( params, thunkAPI ) => {
    try {
      const { code, data } = await getUserInfo()
      if ( code == 200 ) {
        const result = {
          username : data.username || data.nickName || data.phone,
          avatar : data.avatar || '',
          roles : ['admin']
        }
        // console.log( 'data', { ...result } )
        // console.log( 'thunkAPI', thunkAPI )
        // console.log( 'getState', thunkAPI.getState() )
        return result
      } else {
        return thunkAPI.rejectWithValue( data.message || '登录失败' )
        // return Promise.reject( '登录请求错误' )
      }
    } catch ( err ) {
      return thunkAPI.rejectWithValue( err.response.data || '登录失败' )
    }
  }
)

export default userSlice.reducer
