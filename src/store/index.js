
import { configureStore, combineReducers } from '@reduxjs/toolkit'
// import logger from 'redux-logger'
// import { reduxBatch } from '@manaflair/redux-batch'

// 合并多个reducer
const modulesFiles = require.context( './reducers', true, /\.js$/ )
const reducers = modulesFiles.keys().reduce( ( modules, modulePath ) => {
  const moduleName = modulePath.replace( /^\.\/(.*)\.\w+$/, '$1' )
  const value = modulesFiles( modulePath )
  modules[moduleName] = value.default
  return modules
}, {} )

const rootReducer = combineReducers( reducers )

// 文档 ： https://redux-toolkit.js.org/api/configureStore
const store = configureStore( {
  reducer : rootReducer,
  // middleware : getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  // middleware : '', // Redux中间件函数的可选数组
  // preloadedState : {}, // 传递给Redux createstore函数的可选初始状态值。
  // enhancers : '', // 一个可选的Redux存储增强子数组，或者一个自定义增强子数组的回调函数。
  // enhancers: [reduxBatch],
  middleware : ( getDefaultMiddleware ) =>
    getDefaultMiddleware( {
      serializableCheck : false
    } ),
  devTools : true
} )

// // 配置组件和redux的热重载
// if (process.env.NODE_ENV === 'development' && module.hot) {
//   module.hot.accept('./reducers', () => {
//     const newRootReducer = require('./reducers').default
//     store.replaceReducer(newRootReducer)
//   })
// }

export default store
