<template>
  <div class="van-doc-theme-light">
    <demo-section>
      <demo-home></demo-home>
    </demo-section>

    <page-container
      :show="showPageContainer"
      position="right"
    >
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
    </page-container>
  </div>
</template>

<script>
import { watch, ref, computed } from 'vue';
import DemoNav from '@/components/DemoNav.vue';
import DemoSection from '@/components/DemoSection.vue';
import DemoHome from '@/components/DemoHome.vue';
import { config } from '@/utils/site-mobile-shared';
import { RouterView, useRoute } from 'vue-router';
 import Taro from '@tarojs/taro'

export default {
  components: {
    DemoNav,
    DemoSection,
    RouterView,
    DemoHome
  },

  setup() {
    const route = useRoute()
    const showPageContainer = ref(false)

    watch(
      () => route.path,
      (val) => {
        showPageContainer.value = val !== '/zh-CN'
      }
    )
    return {
      showPageContainer
    }
    // const theme = ref('light')
    // watch(
    //   theme,
    //   (newVal, oldVal) => {
    //     document.documentElement.classList.remove(`van-doc-theme-${oldVal}`);
    //     document.documentElement.classList.add(`van-doc-theme-${newVal}`);

    //     const { darkModeClass, lightModeClass } = config.site;
    //     if (darkModeClass) {
    //       document.documentElement.classList.toggle(
    //         darkModeClass,
    //         newVal === 'dark',
    //       );
    //     }
    //     if (lightModeClass) {
    //       document.documentElement.classList.toggle(
    //         lightModeClass,
    //         newVal === 'light',
    //       );
    //     }
    //   },
    //   { immediate: true },
    // );
  },
};
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
