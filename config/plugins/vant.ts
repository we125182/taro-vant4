export default function (ctx, options) {
  const miniTagMap = {
    'button': ['button'],
    'field': ['input', 'textarea'],
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
