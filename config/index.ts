import path from 'path'
import { VantResolver } from '@vant/auto-import-resolver'
import ComponentsPlugin from 'unplugin-vue-components/webpack'
import { defineConfig, type UserConfigExport } from '@tarojs/cli'

const resolve = (dir: string) => path.resolve(__dirname, '..', dir)

const config = defineConfig({
  projectName: 'taro-3.6',
  date: '2023-11-26',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: [
    // 收集vant组件中使用到的原生组件
    resolve('config/plugins/vant.ts'),
    resolve('config/plugins/mini-config.ts'),
    ['@tarojs/plugin-html', {
      modifyElements(inline: string[], block: string[]) {
        // i修改为view(默认为text)避免内部元素无法渲染问题
        inline.splice(inline.indexOf('i'), 1)
        block.push('i')
      }
    }]
  ],
  defineConstants: {},
  // 目录/文件别名
  alias: {
    '@': resolve('src')
  },
  copy: {
    patterns: [],
    options: {}
  },
  framework: 'vue3',
  compiler: {
    type: 'webpack5'
  },
  cache: {
    enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    webpackChain (chain) {
      // vant按需引入
      chain.plugin('components').use(function() {
        return ComponentsPlugin({ resolvers: [VantResolver()] })
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
    runtime: {
      // fix: 修复h5组件使用Element.contains报错问题,例如: van-checkbox
      enableContains: true
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      pxtransform: {
        enable: true,
      },
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
    },
    lessLoaderOption: {
      additionalData: `@import "~@/styles/val.less";@import "~@/styles/function.less";`
    },
    webpackChain (chain) {
      // vant按需引入
      chain.plugin('components').use(function() {
        return ComponentsPlugin({ resolvers: [VantResolver()] })
      })
    }
  }
})

export default function (merge: (...args: UserConfigExport[]) => UserConfigExport) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
