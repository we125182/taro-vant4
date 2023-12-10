import { IPluginContext } from '@tarojs/service'

export default function (ctx: IPluginContext) {
  const miniTagMap = {
    button: ['button'],
    field: ['input', 'textarea', 'label'],
    form: ['form'],
    radio: ['radio'],
    checkbox: ['checkbox'],
    image: ['image'],
    search: ['input'],
    empty: ['image']
  }

  // 收集使用到的小程序组件
  ctx.onParseCreateElement(({ nodeName, componentConfig }) => {
    const includes = componentConfig.includes
    if (nodeName && nodeName.startsWith('van-')) {
      const key = nodeName.substring(4)
      const tags = miniTagMap[key] || []
      for (const tag of tags) {
        if (!includes.has(tag))
          includes.add(tag)
      }
    }
  })
}
