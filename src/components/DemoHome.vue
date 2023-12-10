<template>
  <div class="demo-home">
    <h1
      class="demo-home__title"
      :class="{ 'demo-home__title--small': smallTitle }"
    >
      <img :src="config.logo" />
      <span>{{ config.title }}</span>
    </h1>
    <h2 v-if="config.description" class="demo-home__desc">
      {{ config.description }}
    </h2>
    <demo-home-nav
      v-for="(group, index) in config.nav"
      :key="index"
      :lang="lang"
      :group="group"
    />
  </div>
</template>

<script>
import { config } from '@/utils/site-mobile-shared';
import DemoHomeNav from './DemoHomeNav.vue';

export default {
  components: {
    DemoHomeNav,
  },

  computed: {
    lang() {
      const { lang } = this.$route.meta;
      return lang;
    },

    config() {
      const { locales } = config.site;

      if (locales) {
        return locales[this.lang];
      }

      return config.site;
    },

    smallTitle() {
      return this.config.title.length >= 8;
    },
  },

  mounted() {
    console.log(this.$route)
  },
};
</script>

<style lang="less">
.demo-home {
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  padding: 86PX 20PX 20PX;

  &__title,
  &__desc {
    padding-left: 16PX;
    font-weight: normal;
    line-height: 1;
    user-select: none;
  }

  &__title {
    margin: 0 0 16PX;
    font-size: 32PX;

    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }

    img {
      width: 32PX;
      height: 32PX;
    }

    span {
      margin-left: 16PX;
    }

    &--small {
      font-size: 24PX;
    }
  }

  &__desc {
    margin: 0 0 40PX;
    color: var(--van-doc-text-color-4);
    font-size: 14PX;
    line-height: 1.6;
  }
}
</style>
