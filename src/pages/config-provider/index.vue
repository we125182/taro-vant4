<script setup lang="ts">
import { ref } from 'vue';
import { useTranslate } from '@/utils';

const t = useTranslate({
  'zh-CN': {
    rate: '评分',
    slider: '滑块',
    switch: '开关',
    submit: '提交',
    customTheme: '定制主题',
    defaultTheme: '默认主题',
    darkMode: '深色模式',
    switchDarkMode: '请点击文档右上角的按钮，切换深浅模式。',
  },
  'en-US': {
    rate: 'Rate',
    slider: 'Slider',
    switch: 'Switch',
    submit: 'Submit',
    customTheme: 'Custom Theme',
    defaultTheme: 'DefaultTheme',
    darkMode: 'Dark Mode',
    switchDarkMode:
      'Please click the button in the upper right corner to switch between dark and light modes.',
  },
});

const rate = ref(4);
const slider = ref(50);
const themeVars = {
  rateIconFullColor: '#07c160',
  sliderBarHeight: '4PX',
  sliderButtonWidth: '20PX',
  sliderButtonHeight: '20PX',
  sliderActiveBackground: '#07c160',
  buttonPrimaryBackground: '#07c160',
  buttonPrimaryBorderColor: '#07c160',
};
</script>

<template>
  <div :style="{ minHeight: '100vh' }">
    <demo-block :title="t('darkMode')">
      <van-cell :title="t('switchDarkMode')" />
    </demo-block>

    <demo-block :title="t('defaultTheme')">
      <van-form>
        <van-field name="rate" :label="t('rate')">
          <template #input>
            <van-rate v-model="rate" />
          </template>
        </van-field>

        <van-field name="slider" :label="t('slider')">
          <template #input>
            <van-slider v-model="slider" />
          </template>
        </van-field>

        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit">
            {{ t('submit') }}
          </van-button>
        </div>
      </van-form>
    </demo-block>

    <demo-block :title="t('customTheme')">
      <van-config-provider :theme-vars="themeVars">
        <van-form>
          <van-field name="rate" :label="t('rate')">
            <template #input>
              <van-rate v-model="rate" />
            </template>
          </van-field>

          <van-field name="slider" :label="t('slider')">
            <template #input>
              <van-slider v-model="slider" />
            </template>
          </van-field>

          <div style="margin: 16px">
            <van-button round block type="primary" native-type="submit">
              {{ t('submit') }}
            </van-button>
          </div>
        </van-form>
      </van-config-provider>
    </demo-block>
  </div>
</template>

<style lang="less">
.demo-collapse {
  .van-icon-question-o {
    margin-left: 5PX;
    color: var(--van-blue);
    font-size: 15PX;
    vertical-align: -3PX;
  }
}
</style>
