import path from 'path'
import { VantResolver } from '@vant/auto-import-resolver'
import ComponentsPlugin from 'unplugin-vue-components/webpack'
import postcssRename from './plugins/postcss-rename'

const resolve = (dir: string) => path.resolve(__dirname, '..', dir)

const config = {
  projectName: 'taro-3.6',
  date: '2023-11-26',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [
    resolve('config/plugins/vant.ts'),
    '@tarojs/plugin-html'
  ],
  defineConstants: {
  },
  // 目录/文件别名
  alias: {
    '@': resolve('src')
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'vue3',
  compiler: {
    type: 'webpack5',
    prebundle: {
      exclude: ['vant']
    }
  },
  cache: {
    enable: true // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    webpackChain (chain) {
      // vant样式不进行px转换
      const needPxPluginRules = ['normalCss', 'less']
      needPxPluginRules.forEach(ruleName => {
        chain.module.rule(ruleName).oneOf('0').use('2').tap(options => {
          options.postcssOptions.plugins.push(require('postcss-transform-px')({
            exclude: /[\\/]node_modules[\\/]vant/i
          }))
          return options
        })
      })

      // vant按需引入
      chain.plugin('components').use(function() {
        return ComponentsPlugin({ resolvers: [VantResolver()] })
      })

      // 修复vant样式:root选择器不支持的问题
      chain.module.rule('normalCss').oneOf('0').use('2').tap(options => {
        options.postcssOptions.plugins.push(postcssRename())
        return options
      })
      /**
       * 输出webpack配置
       */
      require('fs').writeFileSync(path.resolve(`${process.env.TARO_ENV}.inspect.config.js`), 'module.exports = ' + chain.toString())
    },
    postcss: {
      pxtransform: {
        enable: false
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    lessLoaderOption: {
      additionalData: `@import "~@/styles/val.less";@import "~@/styles/function.less";`
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
