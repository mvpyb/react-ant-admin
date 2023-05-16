
const path = require( 'path' )
const { GLOBAL_DATA } = require( './src/config/constant' )

const resolve = pathUrl => path.join(__dirname, pathUrl)
const SpeedMeasurePlugin = require( 'speed-measure-webpack-plugin' )
// const TerserPlugin = require("terser-webpack-plugin")
const env = process.env
// const isEnvProduction = env.NODE_ENV === 'production'

// https://blog.csdn.net/guxin_duyin/article/details/127048203
// https://github.com/dilanx/craco/blob/main/packages/craco/README.md
module.exports = {
  reactScriptsVersion: 'react-scripts' /* (default value) */,
  // eslint: {
  //   mode: 'file',
  // },
  webpack: {
    alias: {
      '@': resolve('src')
    },
    configure(config) {
      // config.output.path = resolve( "./dist")
      // config.output.cleanUp = true
      // 监控 webpack 每一步操作的耗时
      config.plugins.push(
        new SpeedMeasurePlugin()
      )
      
      // const Compress = new TerserPlugin({
      //   terserOptions: {
      //     sourceMap: false,
      //     ecma: undefined,
      //     warnings: false,
      //     parse: {
      //       ecma: 8,
      //     },
      //     // https://github.com/terser/terser#compress-options optimization
      //     compress: {
      //       ecma: 5,
      //       warnings: false,
      //       comparisons: false,
      //       inline: 2,
      //       drop_console: process.env.NODE_ENV === "production", // 生产环境下移除控制台所有的内容
      //       drop_debugger: true,
      //       pure_funcs:
      //         process.env.NODE_ENV === "production" ? ["console.log"] : "", // 生产环境下移除console
      //     },
      //     mangle: {
      //       safari10: true,
      //     },
      //     // keep_classnames: isEnvProductionProfile,
      //     // keep_fnames: isEnvProductionProfile,
      //     output: {
      //       ecma: 5,
      //       comments: false,
      //       // Turned on because emoji and regex is not minified properly using default
      //       // https://github.com/facebook/create-react-app/issues/2488
      //       ascii_only: true,
      //     },
      //   },
      // })
      // config.optimization.minimizer[0] = Compress
      // config.optimization.minimizer.push( Compress )
      
      const oneOf_loc = config.module.rules.findIndex( rule => rule.oneOf )
      config.module.rules[oneOf_loc].oneOf = [

        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        // // {
        // //   test: /\.less$/,
        // //   use: ["style-loader", "css-loader", "less-loader"],
        // // },
        // {
        //   test: /\.(png|jpe?g|gif|webp)$/,
        //   type: "asset",
        //   parser: {
        //     dataUrlCondition: {
        //       maxSize: 10 * 1024
        //     }
        //   },
        //   generator: {
        //     // [hash:8]: hash值取8位
        //     // [ext]: 使用之前的文件扩展名
        //     // [query]: 添加之前的query参数
        //     filename: "static/imgs/[hash:8][ext][query]",
        //   },
        // },
        //
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
  
      // console.log('webpackConfig', config)
      return config
    },
    
  },
  style: {
    postcss: {
      env: {
        stage: 3,
        features: {
          'nesting-rules': true,
        },
        autoprefixer: {
          cascade: true,
        },
      },
    },
    // https://craco.js.org/recipes/use-dart-sass/
    sass: {
      loaderOptions: (options, { env, paths }) => {
        return options
      },
    },
  },
  devServer: {
    port: env.PORT,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    host: env.HOST,
    open: false,
    https: false,
    proxy : {
      [env.REACT_APP_BASE_API] : {
        target : GLOBAL_DATA.proxy_url,
        // ws : false,
        changeOrigin : true,
        pathRewrite : {
          ['^' + env.REACT_APP_BASE_API]: ''
        }
      }
    }
  }
}

