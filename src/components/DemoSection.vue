<template>
  <section class="van-doc-demo-section" :class="demoName"><slot/></section>
</template>

<script>
import { decamelize } from '@/utils';

export default {
  name: 'DemoSection',

  computed: {
    demoName() {
      const { meta } = this.$route || {};
      if (meta && meta.name) {
        return `demo-${decamelize(meta.name)}`;
      }

      return '';
    },
  }
};
</script>

<style lang="less">
.van-doc-demo-section {
  box-sizing: border-box;
  min-height: calc(100vh - 56PX);
  padding-bottom: 20PX;
}
</style>
