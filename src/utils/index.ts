import Locale from '@/locale';
import { get, isFunction } from './basic';
import enUS from '@/locale/lang/en-US';
export { useRefs } from './use-refs'
export * from './platform'

export function decamelize(str: string, sep = '-') {
  return str
    .replace(/([a-z\d])([A-Z])/g, '$1' + sep + '$2')
    .replace(/([A-Z])([A-Z][a-z\d]+)/g, '$1' + sep + '$2')
    .toLowerCase();
}

const camelizeRE = /-(\w)/g;

export const camelize = (str: string): string =>
  str.replace(camelizeRE, (_, c) => c.toUpperCase());

export function createTranslate(name: string) {
  const prefix = camelize(name) + '.';

  return (path: string, ...args: unknown[]) => {
    const messages = Locale.messages();
    const message = get(messages, prefix + path) || get(messages, path);

    return isFunction(message) ? message(...args) : message;
  };
}

export const cdnURL = (path: string) =>
  `https://fastly.jsdelivr.net/npm/@vant/assets/${path}`;

export function initDemoLocale() {
  Locale.add({
    'en-US': enUS,
  });

  // add some basic locale messages
  Locale.add({
    'zh-CN': {
      add: '增加',
      red: '红色',
      tab: '标签',
      tag: '标签',
      desc: '描述信息',
      back: '返回',
      title: '标题',
      status: '状态',
      button: '按钮',
      option: '选项',
      search: '搜索',
      orange: '橙色',
      yellow: '黄色',
      purple: '紫色',
      custom: '自定义',
      content: '内容',
      username: '用户名',
      password: '密码',
      decrease: '减少',
      disabled: '禁用状态',
      uneditable: '不可编辑',
      basicUsage: '基础用法',
      usingUrl: '使用图片 URL',
      advancedUsage: '高级用法',
      loadingStatus: '加载状态',
    },
    'en-US': {
      add: 'Add',
      red: 'Red',
      tab: 'Tab',
      tag: 'Tag',
      desc: 'Description',
      back: 'Back',
      title: 'Title',
      status: 'Status',
      button: 'Button',
      option: 'Option',
      search: 'Search',
      orange: 'Orange',
      yellow: 'Yellow',
      purple: 'Purple',
      custom: 'Custom',
      content: 'Content',
      username: 'Username',
      password: 'Password',
      decrease: 'Decrease',
      disabled: 'Disabled',
      uneditable: 'Uneditable',
      basicUsage: 'Basic Usage',
      usingUrl: 'Using URL',
      advancedUsage: 'Advanced Usage',
      loadingStatus: 'Loading',
    },
  });
}

initDemoLocale();

let demoUid = 0;

export function useTranslate(i18n: Record<string, any>) {
  const demoName = `demo-i18n-${demoUid++}`;

  if (i18n) {
    const locales: Record<string, any> = {};
    const camelizedName = camelize(demoName);

    Object.keys(i18n).forEach((key) => {
      locales[key] = { [camelizedName]: i18n[key] };
    });

    Locale.add(locales);
  }

  return createTranslate(demoName);
}
