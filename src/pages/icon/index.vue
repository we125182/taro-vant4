<script setup lang="ts">
import icons from '@vant/icons';
import { ref } from 'vue';
import { cdnURL, showSuccessToast, useTranslate } from '@/utils';

// from https://30secondsofcode.org
function copyToClipboard(str: string) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999PX';
  document.body.appendChild(el);

  const selection = document.getSelection();

  if (!selection) {
    return;
  }

  const selected = selection.rangeCount > 0 ? selection.getRangeAt(0) : false;

  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  if (selected) {
    selection.removeAllRanges();
    selection.addRange(selected);
  }
}

const t = useTranslate({
  'zh-CN': {
    title: '图标列表',
    badge: '徽标提示',
    basic: '基础图标',
    copied: '复制成功',
    outline: '线框风格',
    filled: '实底风格',
    demo: '用法示例',
    color: '图标颜色',
    size: '图标大小',
  },
  'en-US': {
    title: 'Icon List',
    badge: 'Show Badge',
    basic: 'Basic',
    copied: 'Copied',
    outline: 'Outline',
    filled: 'Filled',
    demo: 'Demo',
    color: 'Icon Color',
    size: 'Icon Size',
  },
});

const tab = ref(0);
const demoIcon = 'chat-o';
const demoImage = cdnURL('icon-demo.png');

const copy = (icon: string, option: Record<string, unknown> = {}) => {
  let tag = `<van-icon name="${icon}"`;
  if ('dot' in option) {
    tag = `${tag} ${option.dot ? 'dot' : ''}`;
  }
  if ('badge' in option) {
    tag = `${tag} badge="${option.badge}"`;
  }
  if ('color' in option) {
    tag = `${tag} color="${option.color}"`;
  }
  if ('size' in option) {
    tag = `${tag} size="${option.size}"`;
  }
  tag = `${tag} />`;
  copyToClipboard(tag);

  showSuccessToast(`${t('copied')}：${tag}`);
};
</script>

<template>
  <van-tabs v-model:active="tab" sticky>
    <van-tab class="demo-icon-tab-panel" :title="t('demo')">
      <demo-block :title="t('basicUsage')">
        <van-row>
          <van-col span="6" @click="copy(demoIcon)">
            <van-icon :name="demoIcon" />
          </van-col>
        </van-row>
      </demo-block>

      <demo-block :title="t('usingUrl')">
        <van-row>
          <van-col span="6" @click="copy(demoImage)">
            <van-icon :name="demoImage" />
          </van-col>
        </van-row>
      </demo-block>

      <demo-block :title="t('badge')">
        <van-row>
          <van-col span="6" @click="copy(demoIcon, { dot: true })">
            <van-icon :name="demoIcon" dot />
          </van-col>
          <van-col span="6" @click="copy(demoIcon, { badge: '9' })">
            <van-icon :name="demoIcon" badge="9" />
          </van-col>
          <van-col span="6" @click="copy(demoIcon, { badge: '99+' })">
            <van-icon :name="demoIcon" badge="99+" />
          </van-col>
        </van-row>
      </demo-block>

      <demo-block :title="t('color')">
        <van-row>
          <van-col span="6" @click="copy('cart-o', { color: '#1989fa' })">
            <van-icon name="cart-o" color="#1989fa" />
          </van-col>
          <van-col span="6" @click="copy('fire-o', { color: '#ee0a24' })">
            <van-icon name="fire-o" color="#ee0a24" />
          </van-col>
        </van-row>
      </demo-block>

      <demo-block :title="t('size')">
        <van-row>
          <van-col span="6" @click="copy(demoIcon, { size: '40' })">
            <van-icon :name="demoIcon" size="40" />
          </van-col>
          <van-col span="6" @click="copy(demoIcon, { size: '3rem' })">
            <van-icon :name="demoIcon" size="3rem" />
          </van-col>
        </van-row>
      </demo-block>
    </van-tab>

    <van-tab class="demo-icon-tab-panel" :title="t('basic')">
      <van-row>
        <van-col
          v-for="icon in icons.basic"
          :key="icon"
          span="6"
          @click="copy(icon)"
        >
          <van-icon :name="icon" />
          <span>{{ icon }}</span>
        </van-col>
      </van-row>
    </van-tab>

    <van-tab class="demo-icon-tab-panel" :title="t('outline')">
      <van-row>
        <van-col
          v-for="icon in icons.outline"
          :key="icon"
          span="6"
          @click="copy(icon)"
        >
          <van-icon :name="icon" />
          <span>{{ icon }}</span>
        </van-col>
      </van-row>
    </van-tab>

    <van-tab class="demo-icon-tab-panel" :title="t('filled')">
      <van-row>
        <van-col
          v-for="icon in icons.filled"
          :key="icon"
          span="6"
          @click="copy(icon)"
        >
          <van-icon :name="icon" />
          <span>{{ icon }}</span>
        </van-col>
      </van-row>
    </van-tab>
  </van-tabs>
</template>

<style lang="less">
.demo-icon {
  font-size: 0;

  &-notify {
    font-size: 13PX;
  }

  & &-tab-panel {
    width: auto;
    margin: 20PX;
    background-color: var(--van-background-2);
    border-radius: 12PX;
  }

  .van-col {
    display: inline-block;
    float: none;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;

    span {
      display: block;
      height: 36PX;
      margin: -4PX 0 4PX;
      padding: 0 5PX;
      color: var(--van-text-color);
      font-size: 12PX;
      line-height: 18PX;
    }

    &:active {
      background-color: var(--van-active-color);
    }
  }

  .van-icon {
    margin: 16PX 0 16PX;
    color: var(--van-text-color);
    font-size: 32PX;
  }
}
</style>
