import path from 'path'
import { VantResolver } from '@vant/auto-import-resolver'
import ComponentsPlugin from 'unplugin-vue-components/webpack'
import postcssRename from './plugins/postcss-rename'
import { defineConfig } from '@tarojs/cli'

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
    ['@tarojs/plugin-inject', {
      thirdPartyComponents: {
        'van-loading': {
          type: "'spinner'"
        },
        'demo-nav': {
          icon: "'arrow'"
        }
      }
    }],
    // 收集vant组件中使用到的原生组件
    resolve('config/plugins/vant.ts'),
    ['@tarojs/plugin-html', {
      modifyElements(inline: string[], block: string[]) {
        // i修改为view(默认为text)避免内部元素无法渲染问题
        inline.splice(inline.indexOf('i'), 1)
        block.push('i')
      }
    }]
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
    enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    commonChunks: ['runtime', 'vendors', 'taro', 'common', 'vant'],
    webpackChain (chain) {
      // vant样式不进行px转换
      // const needPxPluginRules = ['normalCss', 'less']
      // needPxPluginRules.forEach(ruleName => {
      //   chain.module.rule(ruleName).oneOf('0').use('2').tap(options => {
      //     options.postcssOptions.plugins.push(require('postcss-transform-px')({
      //       exclude: /[\\/]node_modules[\\/]vant/i
      //     }))
      //     return options
      //   })
      // })

      chain.module.rule('vue').use('vueLoader').tap(options => {
        options.compilerOptions.nodeTransforms.push((node, context) => {
          if (node.tag === 'demo-nav') {
            const icon = node.props.find(prop => prop.name === 'icon')
            if (icon) return
            // const { column, line, offset } = node.loc.start
            // const tagLength = node.tag.length + 2
            const source = 'icon="arrow"'
            // const sourceLength = source.length
            // const start = { line, column: column + tagLength, offset: offset + tagLength }
            const start = { line: 1, column: 1, offset: 0 }
            node.props.push({
              type: 6,
              name: 'icon',
              loc: {
                start,
                // end: { line, column: start.column + sourceLength, offset: start.offset + sourceLength },
                end: start,
                source
              },
              value: {
                content: 'arrow',
                type: 2
              }
            })
            context.replaceNode(node)
          }
        })
        return options
      })

      // vant按需引入
      chain.plugin('components').use(function() {
        return ComponentsPlugin({ resolvers: [VantResolver()] })
      })

      // 修复vant样式:root选择器不支持的问题 :root => page
      chain.module.rule('normalCss').oneOf('0').use('2').tap(options => {
        options.postcssOptions.plugins.push(postcssRename())
        return options
      })

      // 避免vant样式被拆分导致样式优先级错误问题
      chain.optimization.get('splitChunks').cacheGroups.vant = {
        name: 'vant',
        type: 'css/mini-extract',
        test: /[\\/]vant[\\/]es[\\/].+\.css$/,
        chunks: 'all',
        priority: 110,
        minChunks: 1
      }

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

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
