
const TerserPlugin = require("terser-webpack-plugin")

const Compress = new TerserPlugin({
  terserOptions: {
    sourceMap: false,
    ecma: undefined,
    warnings: false,
    parse: {
      ecma: 8,
    },
    // https://github.com/terser/terser#compress-options optimization
    compress: {
      ecma: 5,
      warnings: false,
      comparisons: false,
      inline: 2,
      drop_console: process.env.NODE_ENV === "production", // 生产环境下移除控制台所有的内容
      drop_debugger: true,
      pure_funcs:
        process.env.NODE_ENV === "production" ? ["console.log"] : "", // 生产环境下移除console
    },
    mangle: {
      safari10: true,
    },
    // keep_classnames: isEnvProductionProfile,
    // keep_fnames: isEnvProductionProfile,
    output: {
      ecma: 5,
      comments: false,
      // Turned on because emoji and regex is not minified properly using default
      // https://github.com/facebook/create-react-app/issues/2488
      ascii_only: true,
    },
  },
})

const SplitChunks = {
  chunks: 'async',
  minSize:  40000,
  maxAsyncRequests: 5, // 最大异步请求数
  maxInitialRequests: 4, // 页面初始化最大异步请求数
  automaticNameDelimiter: '~', // 解决命名冲突
  // name: true值将会自动根据切割之前的代码块和缓存组键值(key)自动分配命名,否则就需要传入一个String或者function.
  name: false,
  
  // minRemainingSize: 0,
  // minChunks: 1,
  // enforceSizeThreshold: 50000,
  
  cacheGroups: {
    common: {
      name: 'chunk-common',
      chunks: 'all',
      test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|draft-js)[\\/]/,
      // priority: -10,
    },
    
    // antd: {
    //   name: 'chunk-antd',
    //   chunks: 'all',
    //   test: /[\\/]node_modules[\\/](@ant-design|antd|immutable\/dist|lodash|rc-tree\/es)[\\/]/,
    //   priority: -11,
    // },
    
    // echarts: {
    //   name: 'chunk-echarts',
    //   chunks: 'all',
    //   test: /[\\/]node_modules[\\/](echarts)[\\/]/,
    //   priority: 10,
    // },
    
    // defaultVendors: {
    //   test: /[\\/]node_modules[\\/]/,
    //   priority: -10,
    //   reuseExistingChunk: true,
    // },
    // default: {
    //   minChunks: 2,
    //   priority: -20,
    //   reuseExistingChunk: true,
    // },
  }
}

exports.Compress = Compress
exports.SplitChunks = SplitChunks
