import { IPluginContext } from "@tarojs/service";
import { WindowConfig } from "@tarojs/taro";

/**
 * // TODO: 搜集支付宝小程序与微信小程序的配置差异, 逐步完善
 * 以微信小程序配置为标准, 编译其他小程序平台时, 将相关配置转换为对应平台的配置
 * @param ctx 插件上下文
 */
export default function (ctx: IPluginContext) {
  if (process.env.TARO_ENV !== 'alipay') {
    return
  }
  ctx.modifyMiniConfigs(({configMap}) => {
    Object.keys(configMap).forEach(key => {
      let config: WindowConfig
      if (key === 'app.config') {
        config = configMap[key].content.window
      } else {
        config = configMap[key].content
      }
      if (config.navigationStyle === 'custom') {
        delete config.navigationStyle
        delete config.navigationBarTitleText
        config.transparentTitle = 'always'
        config.titlePenetrate = 'YES'
      }
    })
  })
}
