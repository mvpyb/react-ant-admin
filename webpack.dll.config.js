
const path = require( 'path' )
const webpack = require( 'webpack' )
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' )

const dllPath = 'public/vendor'
module.exports = {
  entry : {
    vendor : [
      'react', 'react-dom', 'react-redux', 'redux', 'react-router', 'react-router-dom',
      'antd', 'axios', 'less-loader'
    ]
  },
  output : {
    path : path.join( __dirname, dllPath ),
    filename : '[name].dll.js',
    library : '[name]_[hash]' // '[name]_library' // 可选 暴露出的全局变量名
  },
  plugins : [
    // 清除之前的dll文件
    new CleanWebpackPlugin(),
    new webpack.DllPlugin( {
      path : path.join( __dirname, dllPath, '[name]-manifest.json' ),
      // 保持与 output.library 中名称一致
      name : '[name]_[hash]'
      // context : process.cwd()
    } )
  ]
}
