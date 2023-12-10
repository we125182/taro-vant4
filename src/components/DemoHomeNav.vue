<template>
  <div class="demo-home-nav">
    <div class="demo-home-nav__title">{{ group.title }}</div>
    <div class="demo-home-nav__group">
      <router-link
        class="demo-home-nav__block"
        v-for="navItem in group.items"
        :key="navItem.path"
        :to="`${base}/${navItem.path}`"
      >
        {{ navItem.title }}
        <van-icon class="demo-home-nav__icon" name="arrow" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vant'
import { Icon } from 'vant'

export default {
  components: {
    [Icon.name]: Icon
  },

  props: {
    lang: String,
    group: Object,
  },

  data() {
    return {
      active: [],
    };
  },

  computed: {
    base() {
      return this.lang ? `/${this.lang}` : '';
    },
  },
};
</script>

<style lang="less">
.demo-home-nav {
  &__title {
    margin: 24PX 0 8PX 16PX;
    color: var(--van-doc-text-color-4);
    font-size: 14PX;
  }

  &__block {
    position: relative;
    display: flex;
    margin: 0 0 12PX;
    padding-left: 20PX;
    color: var(--van-doc-text-color-3);
    font-weight: 600;
    font-size: 14PX;
    line-height: 40PX;
    background-color: var(--van-doc-background-3);
    border-radius: 99PX;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      opacity: 0.6;
    }
  }

  &__icon.van-icon {
    position: absolute;
    top: 50%;
    right: 16PX;
    width: 16PX;
    height: 16PX;
    margin-top: -8PX;
  }
}
</style>
