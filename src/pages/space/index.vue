<script setup>
import { ref } from 'vue';
import { useTranslate } from '@/utils';

const t = useTranslate({
  'zh-CN': {
    vertical: '垂直排列',
    customSize: '自定义间距',
    align: '对齐方式',
    wrap: '自动换行',
  },
  'en-US': {
    vertical: 'Vertical',
    customSize: 'Custom Size',
    align: 'Alignment',
    wrap: 'Auto Wrap',
  },
});

const align = ref('center');
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-space>
      <van-button type="primary">{{ t('button') }}</van-button>
      <van-button type="primary">{{ t('button') }}</van-button>
      <van-button type="primary">{{ t('button') }}</van-button>
      <van-button type="primary">{{ t('button') }}</van-button>
    </van-space>
  </demo-block>

  <demo-block :title="t('vertical')">
    <van-space direction="vertical" fill>
      <van-button type="primary" block>{{ t('button') }}</van-button>
      <van-button type="primary" block>{{ t('button') }}</van-button>
      <van-button type="primary" block>{{ t('button') }}</van-button>
    </van-space>
  </demo-block>

  <demo-block :title="t('customSize')">
    <van-space :size="20" style="margin-bottom: 16px">
      <van-button type="primary">{{ t('button') }}</van-button>
      <van-button type="primary">{{ t('button') }}</van-button>
      <van-button type="primary">{{ t('button') }}</van-button>
    </van-space>

    <van-space size="3rem">
      <van-button type="primary">{{ t('button') }}</van-button>
      <van-button type="primary">{{ t('button') }}</van-button>
      <van-button type="primary">{{ t('button') }}</van-button>
    </van-space>
  </demo-block>

  <demo-block :title="t('align')">
    <van-radio-group
      v-model="align"
      direction="horizontal"
      style="margin-bottom: 16px"
    >
      <van-radio name="start">start</van-radio>
      <van-radio name="center">center</van-radio>
      <van-radio name="end">end</van-radio>
      <van-radio name="baseline">baseline</van-radio>
    </van-radio-group>
    <van-space :align="align" style="padding: 16PX; background: #f3f2f5">
      <van-button type="primary">{{ align }}</van-button>
      <div style="padding: 40PX 20PX; background: #fff">Block</div>
    </van-space>
  </demo-block>

  <demo-block :title="t('wrap')">
    <van-space wrap>
      <van-button type="primary" block>{{ t('button') }}</van-button>
      <van-button type="primary" block>{{ t('button') }}</van-button>
      <van-button type="primary" block>{{ t('button') }}</van-button>
      <van-button type="primary" block>{{ t('button') }}</van-button>
      <van-button type="primary" block>{{ t('button') }}</van-button>
      <van-button type="primary" block>{{ t('button') }}</van-button>
      <van-button type="primary" block>{{ t('button') }}</van-button>
      <van-button type="primary" block>{{ t('button') }}</van-button>
    </van-space>
  </demo-block>
</template>

<style lang="less">
.demo-space {
  background: var(--van-background-2);

  .van-doc-demo-block {
    padding: 0 var(--van-padding-md);
  }

  .van-doc-demo-block__title {
    padding-left: 0;
  }
}
</style>
