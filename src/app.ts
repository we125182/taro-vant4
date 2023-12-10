import './styles/index.less';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from '@/router'

Object.defineProperty(Object.prototype, 'scrollTo', {
  value: () => {},
  enumerable: false,
  writable: true
})
const App = createApp({
  onShow(options) {
    console.log('onShow', options)
  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.config.globalProperties.$platform = process.env.TARO_ENV

App.use(createPinia())
App.use(router)

export default App
