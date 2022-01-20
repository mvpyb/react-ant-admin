
// 详情参照 ： https://github.com/arackaf/customize-cra/blob/master/api.md
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  overrideDevServer,
  // addWebpackModuleRule,
  // addWebpackPlugin,
  watchAll
} = require( 'customize-cra' )

const eslintConfigOverrides = require( 'customize-cra-eslint' )
const eslintConfig = require( './.eslintrc.js' )
// const webpack = require( 'webpack' )

const { GLOBAL_DATA } = require( './src/config/constant' )
const ScriptExtHtmlWebpackPlugin = require( 'script-ext-html-webpack-plugin' )
const path = require( 'path' )

function resolve( dir ) {
  return path.join( __dirname, dir )
}

process.env.CI = 'false'

/**
 * @param target: 要遍历的对象
 * @param name: 插件名
 * @param callback: 回调函数，第一个参数为该插件对象
 * @return null
 */
function invade( target, name, callback ) {
  target.forEach(
    item => {
      if ( item.constructor.name === name ) {
        callback( item )
      }
    }
  )
}

// 自定义组合配置
const addCustomize = () => ( config, env ) => {
  const oneOf_loc = config.module.rules.findIndex( rule => rule.oneOf )
  // TODO 也可以使用 addWebpackModuleRule
  // https://blog.csdn.net/qq_21567385/article/details/108438371
  config.module.rules[oneOf_loc].oneOf = [
    {
      test : /.(eot|otf|fon|font|ttf|ttc|woff|woff2)$/,
      use : [
        {
          loader : 'url-loader',
          options : {
            limit : 1024
          }
        }
      ]
    },
    {
      test : /.(png|jpe?g|gif|bmp)$/,
      exclude : [/(node_modules)/],
      include : [
        resolve( './src' )
      ],
      use : [
        {
          loader : 'url-loader',
          options : {
            limit : 1024 * 10 // < 10k 使用base64
          }
        }
      ]

    },

    {
      test : /\.svg$/,
      include : [resolve( './src/icons' )],
      use : [
        {
          loader : 'svg-sprite-loader',
          options : {
            symbolId : 'icon-[name]'
          }
        },
        //  移除SVG fill属性
        {
          loader : 'svgo-loader',
          options : {
            plugins : [
              {
                name : 'removeAttrs',
                params : {
                  attrs : 'fill'
                }
              }
            ]
          }
        }
      ]
    },
    ...config.module.rules[oneOf_loc].oneOf
  ]

  if ( config.output.publicPath ) {
    config.output.publicPath =
        process.env.NODE_ENV === 'production'
          ? '/react-antd-admin-template/'
          : '/'
  }

  if ( config.resolve ) {
    config.resolve.extensions.push( '.jsx' )
  }

  return config
}

// 自定义dev配置 ：https://v4.webpack.docschina.org/configuration/dev-server/#devserver-open
// https://github.com/arackaf/customize-cra
const devServerConfig = () => config => {
  const result = {
    ...config,
    proxy : {
      '/api' : {
        target : GLOBAL_DATA.proxy_url,
        // ws : false,
        changeOrigin : true,
        pathRewrite : {
          '^/api' : ''
        }
      }
    }
  }
  return result
}

// https://blog.csdn.net/qq_21567385/article/details/108383083
module.exports = {
  // 自定义配置 react 打包生成目录
  paths : function( paths ) {
    paths.appBuild = resolve( './dist' )
    return paths
  },
  webpack : override(
    eslintConfigOverrides( eslintConfig ),
    // 针对antd实现按需打包: 根据import来打包(使用babel-plugin-import)
    fixBabelImports( 'import', {
      libraryName : 'antd',
      libraryDirectory : 'es',
      style : true // 自动打包相关的样式
    } ),

    // 使用less-loader对源码中的less的变量进行重新指定
    addLessLoader( {
      javascriptEnabled : true,
      additionalData : `@import "${resolve( './src/styles/variable.less' )}";`
      // modifyVars : { '@primary-color' : '#1DA57A' }
    } ),

    // 配置路径别名
    addWebpackAlias( {
      '@' : resolve( './src' ),
      '@api' : resolve( './src/api' ),
      '@components' : resolve( './src/components' ),
      '@config' : resolve( './src/config' ),
      '@router' : resolve( './src/router' ),
      '@store' : resolve( './src/store' ),
      '@vendor' : resolve( './src/vendor' ),
      '@utils' : resolve( './src/utils' ),
      '@views' : resolve( './src/views' ),
      '@layout' : resolve( './src/views/layout' ),
      '@styles' : resolve( './src/styles' ),
      '@assets' : resolve( './src/assets' ),
      '@imgs' : resolve( './src/assets/imgs' )
    } ),
    addCustomize(),

    ( config ) => {
      if ( process.env.NODE_ENV === 'production' ) {
        config.devtool = false
        // 美化打包后 js 文件名
        config.output.chunkFilename = config.output.chunkFilename.replace( '.chunk', '' )

        invade( config.optimization.minimizer, 'TerserPlugin', ( e ) => {
          // 去除 LICENSE.txt
          e.options.extractComments = false
          // 去除生产环境 console.log
          e.options.terserOptions.compress.drop_console = true
        } )

        // 美化打包后 css 文件名
        invade( config.plugins, 'MiniCssExtractPlugin', ( e ) => {
          e.options.chunkFilename = e.options.chunkFilename.replace( '.chunk', '' )
        } )

        // 打包 splitChunks 分块策略 参照vue config配置
        config.optimization.splitChunks = {
          chunks : 'all',
          cacheGroups : {
            libs : {
              name : 'chunk-libs',
              test : /[\\/]node_modules[\\/]/,
              priority : 10,
              chunks : 'initial' // 只打包最初依赖的第三方
            },
            commons : {
              name : 'chunk-commons',
              test : resolve( './src/components' ), // 可以自定义规则
              minChunks : 3,
              priority : 5,
              reuseExistingChunk : true
            }
          }
        }

        config.plugins.push(
          new ScriptExtHtmlWebpackPlugin(
            {
              // runtime 必须与 runtimeChunk  名称相同。默认是“runtime”
              inline : /runtime\..*\.js$/
            } )
        )

        config.optimization.runtimeChunk = 'single'
      }

      return config
    }
  ),
  devServer : overrideDevServer(
    devServerConfig(),
    watchAll()
  )
}
