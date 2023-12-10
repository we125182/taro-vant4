<template>
  <div v-show="title" class="demo-nav" :style="{ paddingTop: statusBarHeight }">
    <div class="demo-nav__title" :style="{ '--navbar-height': height }">
      <van-icon v-if="$platform !== 'alipay'" class="demo-nav__back" name="arrow-left" @click="onBack" />
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
import { getSystemInfo } from '@tarojs/taro'

export default {
  name: 'DemoNav',
  data() {
    return {
      statusBarHeight: 0,
      height: 0,
    };
  },

  computed: {
    title() {
      const { name } = this.$route.meta || {};
      return name ? name.replace(/-/g, '') : '';
    },
  },

  mounted() {
    getSystemInfo({
      success: (res) => {
        console.log(res)
        const { statusBarHeight = 0, titleBarHeight, system } = res
        this.statusBarHeight = statusBarHeight + 'px'
        this.height = titleBarHeight
        if (!this.height) {
          this.height = (system || '').toLowerCase().indexOf('ios') > -1 ? 40 : 48
        }
        this.height += 'px'
      }
    })
  },

  methods: {
    onBack() {
      this.$emit('back')
      setTimeout(() => {
        if (history.length > 1) {
          history.back();
        } else {
          this.$router.replace('/');
        }
      }, 300)
    },
  },
};
</script>

<style lang="less">
.demo-nav {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--van-doc-background-3);
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);

  &__title {
    flex: 1;
    text-align: center;
    position: relative;
    font-weight: 600;
    font-size: 17PX;
    line-height: var(--navbar-height);
    text-transform: capitalize;
  }

  &__back {
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 16PX;
    font-size: 24PX;
    line-height: var(--navbar-height);
    cursor: pointer;
  }
}
</style>
