<script setup lang="ts">
import { ref } from 'vue';
import type { PickerConfirmEventParams, PickerOption, PopoverPlacement } from 'vant';
import { showToast } from '@/utils';
import { useTranslate } from '@/utils';

const t = useTranslate({
  'zh-CN': {
    actions: [{ text: '选项一' }, { text: '选项二' }, { text: '选项三' }],
    shortActions: [{ text: '选项一' }, { text: '选项二' }],
    actionsWithIcon: [
      { text: '选项一', icon: 'add-o' },
      { text: '选项二', icon: 'music-o' },
      { text: '选项三', icon: 'more-o' },
    ],
    actionsDisabled: [
      { text: '选项一', disabled: true },
      { text: '选项二', disabled: true },
      { text: '选项三' },
    ],
    actionsDirection: '排列方向',
    horizontal: '水平排列',
    vertical: '垂直排列',
    showIcon: '展示图标',
    placement: '弹出位置',
    darkTheme: '深色风格',
    lightTheme: '浅色风格',
    showPopover: '点击弹出气泡',
    uncontrolled: '非受控模式',
    actionOptions: '选项配置',
    customContent: '自定义内容',
    disableAction: '禁用选项',
    choosePlacement: '选择弹出位置',
  },
  'en-US': {
    actions: [{ text: 'Option 1' }, { text: 'Option 2' }, { text: 'Option 3' }],
    shortActions: [{ text: 'Option 1' }, { text: 'Option 2' }],
    actionsWithIcon: [
      { text: 'Option 1', icon: 'add-o' },
      { text: 'Option 2', icon: 'music-o' },
      { text: 'Option 3', icon: 'more-o' },
    ],
    actionsDisabled: [
      { text: 'Option 1', disabled: true },
      { text: 'Option 2', disabled: true },
      { text: 'Option 3' },
    ],
    actionsDirection: 'Actions Direction',
    horizontal: 'Horizontal',
    vertical: 'Vertical',
    showIcon: 'Show Icon',
    placement: 'Placement',
    darkTheme: 'Dark Theme',
    lightTheme: 'Light Theme',
    showPopover: 'Show Popover',
    uncontrolled: 'Uncontrolled',
    actionOptions: 'Action Options',
    customContent: 'Custom Content',
    disableAction: 'Disable Action',
    choosePlacement: 'Placement',
  },
});

const placements: PickerOption[] = [
  'top',
  'top-start',
  'top-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
].map((item) => ({ text: item, value: item }));

const show = ref({
  horizontal: false,
  vertical: false,
  showIcon: false,
  placement: false,
  darkTheme: false,
  lightTheme: false,
  customContent: false,
  disableAction: false,
});
const showPicker = ref(false);
const currentPlacement = ref<PopoverPlacement>('top');

const onClickChoosePlacement = () => {
  showPicker.value = true;

  setTimeout(() => {
    show.value = {
      ...show.value,
      placement: true,
    };
  }, 300);
};

const onPickerChange = (option: PickerConfirmEventParams) => {
  setTimeout(() => {
    show.value.placement = true;
    currentPlacement.value = option.selectedValues[0] as PopoverPlacement;
  });
};

const onSelect = (action: { text: string }) => showToast(action.text);
</script>

<template>
  <demo-block :title="t('basicUsage')">
    <van-popover
      v-model:show="show.lightTheme"
      :actions="t('actions')"
      placement="bottom-start"
      @select="onSelect"
    >
      <template #reference>
        <van-button type="primary">
          {{ t('lightTheme') }}
        </van-button>
      </template>
    </van-popover>

    <van-popover
      v-model:show="show.darkTheme"
      theme="dark"
      :actions="t('actions')"
      @select="onSelect"
    >
      <template #reference>
        <van-button type="primary">
          {{ t('darkTheme') }}
        </van-button>
      </template>
    </van-popover>
  </demo-block>

  <demo-block :title="t('placement')">
    <van-field
      is-link
      readonly
      name="picker"
      :label="t('choosePlacement')"
      @click="onClickChoosePlacement"
    />

    <van-popup
      v-model:show="showPicker"
      round
      position="bottom"
      teleport="body"
    >
      <div class="demo-popover-box">
        <van-popover
          v-model:show="show.placement"
          theme="dark"
          :actions="t('shortActions')"
          :placement="currentPlacement"
          @select="onSelect"
        >
          <template #reference>
            <div class="demo-popover-refer" />
          </template>
        </van-popover>
      </div>
      <van-picker
        :columns="placements"
        :show-toolbar="false"
        @change="onPickerChange"
      />
    </van-popup>
  </demo-block>

  <demo-block :title="t('actionsDirection')">
    <van-popover
      v-model:show="show.horizontal"
      :actions="t('actions')"
      actions-direction="horizontal"
      placement="bottom-start"
      @select="onSelect"
    >
      <template #reference>
        <van-button type="primary">
          {{ t('horizontal') }}
        </van-button>
      </template>
    </van-popover>

    <van-popover
      v-model:show="show.vertical"
      :actions="t('actions')"
      @select="onSelect"
    >
      <template #reference>
        <van-button type="primary">
          {{ t('vertical') }}
        </van-button>
      </template>
    </van-popover>
  </demo-block>

  <demo-block :title="t('actionOptions')">
    <van-popover
      v-model:show="show.showIcon"
      :actions="t('actionsWithIcon')"
      placement="bottom-start"
      @select="onSelect"
    >
      <template #reference>
        <van-button type="primary">
          {{ t('showIcon') }}
        </van-button>
      </template>
    </van-popover>

    <van-popover
      v-model:show="show.disableAction"
      :actions="t('actionsDisabled')"
      @select="onSelect"
    >
      <template #reference>
        <van-button type="primary">
          {{ t('disableAction') }}
        </van-button>
      </template>
    </van-popover>
  </demo-block>

  <demo-block :title="t('customContent')">
    <van-popover
      v-model:show="show.customContent"
      placement="top-start"
      @select="onSelect"
    >
      <van-grid
        square
        clickable
        :border="false"
        column-num="3"
        style="width: 240px"
      >
        <van-grid-item
          v-for="i in 6"
          :key="i"
          icon="photo-o"
          :text="t('option')"
          @click="show.customContent = false"
        />
      </van-grid>
      <template #reference>
        <van-button type="primary">
          {{ t('customContent') }}
        </van-button>
      </template>
    </van-popover>
  </demo-block>

  <demo-block :title="t('uncontrolled')">
    <van-popover
      :actions="t('actions')"
      placement="top-start"
      @select="onSelect"
    >
      <template #reference>
        <van-button type="primary">
          {{ t('uncontrolled') }}
        </van-button>
      </template>
    </van-popover>
  </demo-block>
</template>

<style lang="less">
.demo-popover {
  &-refer {
    width: 60PX;
    height: 60PX;
    background-color: var(--van-blue);
    border-radius: 8PX;
  }

  .van-popover__wrapper {
    margin-left: var(--van-padding-md);
  }

  .van-field {
    width: auto;
    margin: 0 12PX;
    overflow: hidden;
    border-radius: 8PX;
  }

  &-box {
    display: flex;
    justify-content: center;
    margin: 110PX 0;

    .van-popover__wrapper {
      margin-left: 0;
    }
  }
}
</style>
