import { ref, reactive } from 'vue';
import { deepAssign } from '../utils/deep-assign';
import defaultMessages from './lang/zh-CN';
import { getStorageSync, setStorageSync } from '@tarojs/taro';

type Message = Record<string, any>;
type Messages = Record<string, Message>;

const ZH_CN = 'zh-CN';
const EN_US = 'en-US';
const CACHE_KEY = 'vant-cli-lang';

let currentLang = ZH_CN;
export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  currentLang = lang;
  setStorageSync(CACHE_KEY, lang);
}

export function setDefaultLang(langFromConfig) {
  const cached = getStorageSync(CACHE_KEY);

  if (cached) {
    currentLang = cached;
    return;
  }

  if (navigator.language && navigator.language.indexOf('zh-') !== -1) {
    currentLang = ZH_CN;
    return;
  }

  currentLang = langFromConfig || EN_US;
}

const lang = ref('zh-CN');
const messages = reactive<Messages>({
  'zh-CN': defaultMessages,
});

export const Locale = {
  messages(): Message {
    return messages[lang.value];
  },

  use(newLang: string, newMessages?: Message) {
    lang.value = newLang;
    this.add({ [newLang]: newMessages });
  },

  add(newMessages: Message = {}) {
    deepAssign(messages, newMessages);
  },
};

export const useCurrentLang = () => lang;

export default Locale;
