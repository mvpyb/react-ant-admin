
const path = require( 'path' )
const { GLOBAL_DATA } = require( './src/config/constant' )
const { Compress, SplitChunks } = require("./scripts")
const SpeedMeasurePlugin = require( 'speed-measure-webpack-plugin' )
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const CompressionPlugin = require("compression-webpack-plugin")

const resolve = pathUrl => path.join(__dirname, pathUrl)
const env = process.env
const isEnvProduction = env.NODE_ENV === 'production'

// https://blog.csdn.net/guxin_duyin/article/details/127048203
// https://github.com/dilanx/craco/blob/main/packages/craco/README.md
module.exports = {
  reactScriptsVersion: 'react-scripts' /* (default value) */,
  webpack: {
    alias: {
      '@': resolve('src')
    },
    // https://www.likecs.com/ask-275347.html
    configure(config, { env, paths }) {
      config.output = {
        ...config.output,
        path: resolve( "./dist")
      }
      
      // 监控 webpack 每一步操作的耗时
      config.plugins.push(
        new SpeedMeasurePlugin()
      )
      
      // 打包依赖插件分析
      if( isEnvProduction ) {
        if( env['REACT_APP_ANALYZER'] === 'true' ) {
          config.plugins.push(
            new BundleAnalyzerPlugin()
          )
        }
      }
  
      config.optimization = {
        ...config.optimization,
        splitChunks: SplitChunks,
        minimizer: [
          // Compress,
          ...config.optimization.minimizer
        ],
      }
  
      // gzip 压缩
      config.plugins.push(
        new CompressionPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.(js|jsx|ts|tsx|json|scss|css|html|svg)$/,
          threshold: 0, // 只有大小大于该值的资源会被处理
          minRatio: 1, // 默认0.8 只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: env['REACT_APP_COMPRESS_CLEAN'] === 'true' // 删除原文件
        })
      )
      
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
      return config
    },
    plugins:{
      // add:[],
      // remove:[]
    }
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

