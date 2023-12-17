<template>
  <div class="van-doc-theme-light">
    <demo-section>
      <demo-home></demo-home>
    </demo-section>
    <component :is="container.is" :show="showPageContainer" v-bind="container.props">
      <div class="page-container">
        <demo-nav @back="showPageContainer = false" />
        <router-view v-slot="{ Component }">
          <demo-section>
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </demo-section>
        </router-view>
      </div>
    </component>
  </div>
</template>

<script setup>
import { watch, ref, computed } from 'vue';
import DemoNav from '@/components/DemoNav.vue';
import DemoSection from '@/components/DemoSection.vue';
import DemoHome from '@/components/DemoHome.vue';
import { config } from '@/utils/site-mobile-shared';
import { RouterView, useRoute, useRouter } from 'vue-router';
import Taro from '@tarojs/taro'
import { Popup } from 'vant'

const route = useRoute()
const router = useRouter()
const showPageContainer = ref(false)
const theme = ref('light')
const themeClass = computed(() => {
  return `van-doc-theme-${theme.value} van-theme-${theme.value}}`
})

const container = process.env.TARO_ENV === 'h5' ? {
  is: Popup,
  props: {
    position: 'right',
    duration: '0.3',
    style: {
      height: '100vh',
      width: '100vw',
      overflowY: 'auto',
      backgroundColor: 'var(--van-doc-gray-1)',
    },
    onClosed: onAfterLeave
  }
} : {
  is: 'page-container',
  props: {
    position: 'right',
    onAfterLeave: onAfterLeave
  }
}

watch(
  () => route.path,
  (val) => {
    showPageContainer.value = val !== '/zh-CN'
  }
)

function onAfterLeave() {
  // 兼容支付宝小程序(返回按钮自带, DemoNav无法自定义)
  if (process.env.TARO_ENV === 'alipay') {
    router.replace('/zh-CN')
  }
}
</script>

<style lang="less">
.van-doc-theme-light {
  background-color: var(--van-doc-gray-1);
}

.van-doc-theme-dark {
  background-color: var(--van-doc-black);
}

.page-container {
  height: 100vh;
  overflow-y: auto;
  background-color: var(--van-doc-gray-1);
}

::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
</style>
