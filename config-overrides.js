
// more ： https://github.com/arackaf/customize-cra/blob/master/api.md
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  overrideDevServer,
  adjustStyleLoaders,
  // getBabelLoader,
  // addBabelPlugin,
  // addBabelPlugins,
  // addWebpackModuleRule,
  // addWebpackPlugin,
  watchAll
} = require( 'customize-cra' )

const eslintConfigOverrides = require( 'customize-cra-eslint' )
const eslintConfig = require( './.eslintrc.js' )

const { GLOBAL_DATA } = require( './src/config/constant' )
const ScriptExtHtmlWebpackPlugin = require( 'script-ext-html-webpack-plugin' )
const path = require( 'path' )

const HardSourceWebpackPlugin = require( 'hard-source-webpack-plugin' )
const BundleAnalyzerPlugin = require( 'webpack-bundle-analyzer' ).BundleAnalyzerPlugin
const SpeedMeasurePlugin = require( 'speed-measure-webpack-plugin' )
const getCSSModuleLocalIdent = require( 'react-dev-utils/getCSSModuleLocalIdent' )

function resolve( dir ) {
  return path.join( __dirname, dir )
}

process.env.CI = 'false'
const isEnvProduction = process.env.NODE_ENV === 'production'
const lessModuleRegex = /\.module\.(less)$/

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

/** 参照react-scripts/webpack.config.js line 505*/
const getStyleLoaders = ( cssOptions, preProcessor, lessOptions ) => {
  const loaders = [
    require.resolve( 'style-loader' ),
    {
      loader : require.resolve( 'css-loader' ),
      options : cssOptions
    },
    {
      loader : require.resolve( 'postcss-loader' ),
      options : {
        ident : 'postcss',
        plugins : () => [
          require( 'postcss-flexbugs-fixes' ),
          require( 'postcss-preset-env' )( {
            autoprefixer : {
              flexbox : 'no-2009'
            },
            stage : 3
          } )
        ],
        sourceMap : true
      }
    }
  ]
  if ( preProcessor ) {
    loaders.push( {
      loader : require.resolve( preProcessor ),
      options : lessOptions ? {
        ...lessOptions,
        sourceMap : true
      } : {
        sourceMap : true
      }

    } )
  }
  return loaders
}

// 自定义组合配置
const addCustomize = () => ( config, env ) => {
  // 监控 webpack 每一步操作的耗时
  config.plugins.push(
    new SpeedMeasurePlugin()
  )

  const oneOf_loc = config.module.rules.findIndex( rule => rule.oneOf )
  config.module.rules[oneOf_loc].oneOf = [
    {
      test : lessModuleRegex,
      use : getStyleLoaders(
        {
          importLoaders : 2,
          modules : {
            getLocalIdent : getCSSModuleLocalIdent
          }
        },
        'less-loader'
      )
    },

    {
      test : /.(eot|otf|fon|font|ttf|ttc|woff|woff2)$/,
      // test : /\.(eot|woff|ttf|woff2)\??.*$/,
      // exclude : [/^node_modules$/, path.resolve( __dirname, '../src/icons/svg' )],
      use : [
        // {
        //   loader : 'file-loader',
        //   options : {
        //     postTransformPublicPath : ( p ) => `__webpack_public_path__ + ${p}`,
        //     publicPath : '../fonts/',
        //     outputPath : 'static/fonts/',
        //     // name : '[path][name].[ext]',
        //     // name : '[contenthash].[ext]'
        //     name : '[contenthash].[ext]'
        //   }
        // },

        {
          loader : 'url-loader',
          options : {
            limit : 1024 * 10,
            fallback : 'file-loader',
            postTransformPublicPath : ( p ) => `__webpack_public_path__ + ${p}`,
            publicPath : '../fonts/',
            outputPath : 'static/fonts/',
            name : '[contenthash].[ext]'
          }
        }

        // {
        //   loader : 'url-loader',
        //   options : {
        //     limit : 1024 * 100,
        //     fallback : 'file-loader'
        //   }
        // }
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
            limit : 1024 * 10
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

  // if ( config.output.publicPath ) {
  //   config.output.publicPath =
  //       process.env.NODE_ENV === 'production'
  //         ? '/react-ant-admin/dist/'
  //         : '/'
  // }
  config.output.publicPath = './'

  if ( config.resolve ) {
    config.resolve.extensions.push( '.jsx' )
  }

  if ( isEnvProduction ) {
    config.devtool = false
    config.output.chunkFilename = config.output.chunkFilename.replace( '.chunk', '' )

    invade( config.optimization.minimizer, 'TerserPlugin', ( e ) => {
      e.options.extractComments = false
      e.options.terserOptions.compress.drop_console = true
    } )

    invade( config.plugins, 'MiniCssExtractPlugin', ( e ) => {
      e.options.chunkFilename = e.options.chunkFilename.replace( '.chunk', '' )
    } )

    config.optimization.splitChunks = {
      chunks : 'all',
      cacheGroups : {
        libs : {
          name : 'chunk-libs',
          test : /[\\/]node_modules[\\/]/,
          priority : -10,
          chunks : 'initial'
        },
        antd : {
          name : 'chunk-antd', // 单独将 antd 拆包
          priority : 20, // 权重要大于 libs 不然会被打包进 libs
          test : /[\\/]node_modules[\\/]antd[\\/]/
        },
        commons : {
          name : 'chunk-commons',
          test : resolve( './src/components' ),
          minChunks : 3, // 最小公用次数
          priority : 5,
          reuseExistingChunk : true
        }
      }
    }

    config.plugins.push(
      new ScriptExtHtmlWebpackPlugin(
        {
          inline : /runtime\..*\.js$/
        } )
    )

    config.optimization.runtimeChunk = 'single'

    config.plugins.push(
      new BundleAnalyzerPlugin()
    )

    // https://github.com/mzgoddard/hard-source-webpack-plugin
    config.plugins.push(
      new HardSourceWebpackPlugin( {
        // cacheDirectory : 'node_modules/.cache/hard-source/[confighash]',
        environmentHash : {
          root : process.cwd(),
          directories : [],
          files : ['package-lock.json', 'yarn.lock', 'package.json', 'config-overrides.js']
        }
      } )
    )
  }

  return config
}

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

module.exports = {
  paths : function( paths ) {
    paths.appBuild = resolve( './dist' )
    return paths
  },
  webpack : override(

    eslintConfigOverrides( eslintConfig ),

    fixBabelImports( 'import', {
      libraryName : 'antd',
      libraryDirectory : 'es',
      style : true
    } ),

    // 使用less-loader对源码中的less的变量进行重新指定
    addLessLoader( {
      sourceMap : true,
      javascriptEnabled : true,
      additionalData : `@import "${resolve( './src/styles/variable.less' )}";`
      // modifyVars : { '@primary-color' : '#7A6FBE' }
      // cssModules : {
      //   // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
      //   localIdentName : '[path][name]__[local]--[hash:base64:5]'
      // }
    } ),

    addWebpackAlias( {
      '@' : resolve( './src' )
    } ),

    addCustomize(),

    adjustStyleLoaders( ( { use : [, css, postcss, resolve, processor] } ) => {
      if ( css && css.options ) {
        css.options.sourceMap = true
      }
      if ( postcss && postcss.options ) {
        postcss.options.sourceMap = true
      }
      if ( resolve && resolve.options ) {
        resolve.options.sourceMap = true // resolve-url-loader
      }
      // if ( processor && processor.options && processor.loader.includes( 'sass-loader' ) ) {
      //   processor.options.sourceMap = true
      // }

      // css.options.modules = {
      //   localIdentName : '[name]__[local]--[hash:base64:5]',
      //   getLocalIdent : ( loaderContext, localIdentName, localName, options ) => {
      //     if ( loaderContext.resourcePath.includes( 'node_modules' ) ) {
      //       return localName
      //     }
      //   }
      // }
    } ),

    // ( config ) => {
    //   return config
    // }
  ),
  devServer : overrideDevServer(
    devServerConfig(),
    watchAll()
  )
}
