import { IPluginContext } from '@tarojs/service'
import { ICompiler } from '@tarojs/taro/types/compile/compiler'
import type { PlainElementNode } from '@vue/compiler-core'
import type { Plugin } from 'postcss'

export default function (ctx: IPluginContext) {
  if (process.env.TARO_ENV === 'h5') return
  const MINI_TAG_MAP = mapKeys({
    button: ['button'],
    field: ['input', 'textarea', 'label'],
    form: ['form'],
    radio: ['radio'],
    checkbox: ['checkbox'],
    image: ['image'],
    search: ['input'],
    empty: ['image']
  })

  const NEED_ADD_PROP_COMPONENT = mapKeys({
    'loading': {
      type: 'spinner'
    },
    'popup': {
      duration: '0.3'
    }
  })

  ctx.onReady(() => {
    const compiler  = ctx.initialConfig.compiler
    if (compiler && (compiler === 'webpack5' || (compiler as ICompiler).type === 'webpack5')) {
      ctx.compiler = {
        type: 'webpack5',
        prebundle: {
          ...(compiler as ICompiler).prebundle,
          exclude: ((compiler as ICompiler).prebundle?.exclude || []).concat('vant')
        }
      }
    }
    // 声明单独分包的vant样式库, 全局样式才会导入
    const commonChunks = ctx.initialConfig.mini!.commonChunks
    if (Array.isArray(commonChunks)) {
      commonChunks.push('vant')
    } else {
      ctx.initialConfig.mini!.commonChunks = (chunks) => {
        chunks.push('vant')
        return commonChunks ? commonChunks(chunks) : chunks
      }
    }
  })

  ctx.modifyWebpackChain(({ chain }) => {
    /**
     * // TODO: 考虑为taro的pxtransform插件添加exclude配置
     * 因taro自带的postcss插件不支持exclude配置, 使用自己的插件
     * vant样式不进行px转换
     */
    const needPxPluginRules = ['normalCss', 'less']
    needPxPluginRules.forEach(ruleName => {
      chain.module.rule(ruleName).oneOf('0').use('2').tap(options => {
        options.postcssOptions.plugins.push(require('postcss-transform-px')({
          exclude: /[\\/]node_modules[\\/]vant/i
        }))
        return options
      })
    })

    // 修复vant样式:root选择器不支持的问题 :root => page
    chain.module.rule('normalCss').oneOf('0').use('2').tap(options => {
      options.postcssOptions.plugins.push(postcssRename())
      return options
    })

    // 为vant组件添加默认值
    chain.module.rule('vue').use('vueLoader').tap(options => {
      options.compilerOptions.nodeTransforms.push((node: PlainElementNode, context) => {
        const props = NEED_ADD_PROP_COMPONENT[node.tag] || {}
        for (let name in props) {
          const propNode = node.props.find(item => item.name === name)
          if (propNode) continue
          node.props.push({
            type: 6,
            name,
            loc: {
              start: node.loc.start,
              end: node.loc.end,
              source: `${name}="${props[name]}"`
            },
            value: {
              content: props[name],
              type: 2,
              loc: {
                start: node.loc.start,
                end: node.loc.end,
                source: props[name]
              }
            }
          })
        }
      })
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
  })

  // 收集使用到的小程序组件
  ctx.onParseCreateElement(({ nodeName, componentConfig }) => {
    const includes = componentConfig.includes
    if (nodeName && nodeName.startsWith('van-')) {
      const tags = MINI_TAG_MAP[nodeName] || []
      for (const tag of tags) {
        if (!includes.has(tag))
          includes.add(tag)
      }
    }
  })
}

function mapKeys(
  obj: Record<string, any>,
  cb: (value: unknown, key: string) => string = (value, key) => `van-${key}`
) {
  return Object.keys(obj).reduce((acc, key) => {
    acc[cb(obj[key], key)] = obj[key]
    return acc
  }, {})
}

function postcssRename(opts = { ':root': 'page' }): Plugin {
  const keys = Object.keys(opts)
  return {
    postcssPlugin: 'postcss-rename',
    Rule(rule) {
      if (rule.source?.input.file && rule.source.input.file.indexOf('vant/es/') > -1) {
        if (keys.includes(rule.selector)) {
          rule.selector = rule.selector.replace(rule.selector, opts[rule.selector])
        } else if (rule.selector === '.h5-input,.h5-button,.h5-textarea') {
          // rule.remove()
        }
      }
    }
  }
}
