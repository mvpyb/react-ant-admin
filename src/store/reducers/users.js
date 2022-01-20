
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCookie, addCookie, removeCookie } from '@utils/cookies'
import { COOKIE_PREFIX, TOKEN } from '@config/constant'
import { getUserInfo } from '@api/user'

export const initialState = {
  username : '',
  roles : [],
  avatar : '',
  token : getCookie( TOKEN ) || ''
}

// A slice for posts with our three reducers
export const userSlice = createSlice( {
  name : 'users',
  initialState,
  reducers : {
    setToken : ( state, { payload : token } ) => {
      state.token = token || ''
      addCookie( TOKEN, token )
    },
    setUserInfo : ( state, { payload : { roles, avatar, username }} ) => {
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
      // console.log( '1 fulfilled', { payload, state } )
    } )
    builder.addCase( getUserInfoSlice.rejected, ( state, action ) => {
      // userSlice.actions.clearUserInfo()
    } )
  }

} )

export const { setToken, setUserInfo, clearUserInfo } = userSlice.actions

// 异步请求
export const asyncGetInfo = payload => async( dispatch ) => {
  const { code, data } = await getUserInfo()
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
      const { code, data } = await getUserInfo( { token : getCookie( TOKEN ) || thunkAPI.getState().users.token } )
      if ( code == 200 ) {
        const result = {
          username : data.username || data.nickName || data.phone,
          avatar : data.avatar || '',
          roles : ['admin']
        }

        thunkAPI.dispatch( setUserInfo( result ) )

        return result
      } else {
        thunkAPI.dispatch( clearUserInfo( ) )
        return thunkAPI.rejectWithValue( data.message || '登录失败' )
        // return Promise.reject( '登录请求错误' )
      }
    } catch ( err ) {
      console.log( 'err', err )
      thunkAPI.dispatch( clearUserInfo( ) )
      return thunkAPI.rejectWithValue( err.response.data || '登录失败' )
    }
  }
)

export default userSlice.reducer
