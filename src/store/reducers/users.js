
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCookie, addCookie, removeCookie } from '@/utils/cookies'
import { getUserInfo, logOut } from '@/api/user'

export const initialState = {
  username : '灰是小灰灰的灰',
  roles : [],
  avatar : 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
  token : getCookie( 'token' ) || ''
}

// A slice for posts with our three reducers
export const userSlice = createSlice( {
  name : 'users',
  initialState,
  reducers : {
    SET_TOKEN : ( state, { payload : token } ) => {
      state.token = token || ''
      addCookie( 'token', token )
    },
    SET_USER_INFO : ( state, { payload : { roles, avatar, username }} ) => {
      state.roles = roles
      state.avatar = avatar || ''
      state.username = username || ''

      addCookie( `username`, username )
      addCookie( `roles`, roles )
    },
    CLEAR_USER_INFO : ( state ) => {
      state.roles = []
      state.avatar = ''
      state.username = ''
      state.token = ''

      removeCookie( 'username' )
      removeCookie( 'roles' )
      removeCookie( 'token' )
    }
  },

  // https://zhuanlan.zhihu.com/p/382487951
  extraReducers : ( builder ) => {
    builder.addCase( getUserInfoSlice.pending, () => {
      // console.log('pending 进行中');
    } )
    builder.addCase( getUserInfoSlice.fulfilled, ( state, { payload } ) => {
      // console.log( '1 fulfilled', { payload, state } )
    } )
    builder.addCase( getUserInfoSlice.rejected, ( state, action ) => {
      // userSlice.actions.CLEAR_USER_INFO()
    } )
  }

} )

export const { SET_TOKEN, SET_USER_INFO, CLEAR_USER_INFO } = userSlice.actions

// // 异步请求
// export const asyncGetInfo = payload => async( dispatch ) => {
//   const { code, data } = await getUserInfo()
//   if ( code == 200 ) {
//     dispatch( SET_USER_INFO( {
//       ...data,
//       username : data.username || data.nickName || data.phone,
//       roles : data.roles && data.roles > 0 ? ['admin'] : []
//     } ) )
//     return data
//   } else {
//     dispatch( CLEAR_USER_INFO() )
//     return {}
//   }
// }

// 文档 ： https://redux-toolkit.js.org/api/createAsyncThunk
export const getUserInfoSlice = createAsyncThunk(
  'user/getUserInfo',
  async( params, thunkAPI ) => {
    try {
      const { code, data } = await getUserInfo( { token : getCookie( 'token' ) || thunkAPI.getState().users.token } )
      if ( code == 200 ) {
        const result = {
          username : data.username || data.nickName || data.phone,
          avatar : data.avatar || '',
          roles : data.roles || ['admin']
        }

        thunkAPI.dispatch( SET_USER_INFO( result ) )

        return result
      } else {
        thunkAPI.dispatch( CLEAR_USER_INFO( ) )
        return thunkAPI.rejectWithValue( data.message || '登录失败' )
        // return Promise.reject( '登录请求错误' )
      }
    } catch ( err ) {
      console.log( 'err', err )
      thunkAPI.dispatch( CLEAR_USER_INFO( ) )
      return thunkAPI.rejectWithValue( err.response.data || '登录失败' )
    }
  }
)

export const loginOut = createAsyncThunk(
  'user/loginOut',
  async( params, thunkAPI ) => {
    try {
      const { code, data } = await logOut()
      if ( code == 200 ) {
        thunkAPI.dispatch( CLEAR_USER_INFO() )
        window.location.reload()
        return {}
      } else {
        return thunkAPI.rejectWithValue( data.message || '登出失败' )
      }
    } catch ( err ) {
      return thunkAPI.rejectWithValue( err.response.data || '登出失败' )
    }
  }
)

export default userSlice.reducer
