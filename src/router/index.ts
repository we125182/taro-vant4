import { createRouter, createWebHashHistory } from 'vue-router';
import DemoHome from '@/components/DemoHome.vue';
import { decamelize } from '@/utils';
import { demos, config } from '@/utils/site-mobile-shared';
import { getLang, setDefaultLang } from '@/locale';
import type { RouteRecordRaw } from 'vue-router';
import Taro from '@tarojs/taro';

const { locales, defaultLang } = config.site;

setDefaultLang(defaultLang);

function getLangFromRoute(route) {
  const lang = route.path.split('/')[1];
  const langs = Object.keys(locales);

  if (langs.indexOf(lang) !== -1) {
    return lang;
  }

  return getLang();
}

function getRoutes() {
  const routes: RouteRecordRaw[] = [];
  const names = Object.keys(demos);
  const langs = locales ? Object.keys(locales) : [];

  if (langs.length) {
    routes.push({
      name: 'NotFound',
      path: '/:path(.*)+',
      redirect: (route) => ({
        name: getLangFromRoute(route),
      }),
    });

    langs.forEach((lang) => {
      routes.push({
        name: lang,
        path: `/${lang}`,
        component: DemoHome,
        meta: { lang },
      });
    });
  } else {
    routes.push({
      name: 'NotFound',
      path: '/:path(.*)+',
      redirect: {
        name: 'home',
      },
    });

    routes.push({
      name: 'home',
      path: '/',
      component: DemoHome,
    });
  }

  names.forEach((name) => {
    const component = decamelize(name);

    if (langs.length) {
      langs.forEach((lang) => {
        routes.push({
          name: `${lang}/${component}`,
          path: `/${lang}/${component}`,
          component: demos[name],
          meta: {
            name,
            lang,
          },
        });
      });
    } else {
      routes.push({
        name: component,
        path: `/${component}`,
        component: demos[name],
        meta: {
          name,
        },
      });
    }
  });

  return routes;
}
const router = createRouter({
  history: createWebHashHistory(),
  routes: getRoutes()
});
const MINI_NOT_SUPPORT_COMPONENT = [
  'toast',
  'calendar',
  'date-picker',
  'picker',
  'picker-group',
  'signature',
  'time-picker',
  'uploader',
  'barrage',
  'dropdown-menu',
  'floating-bubble',
  'notify',
  'pull-refresh',
  'circle',
  'image-preview',
  'lazyload',
  'list',
  'popover',
  'progress',
  'sticky',
  'swipe',
  'text-ellipsis',
  'watermark',
  'back-top',
  'index-bar',
  'address-edit',
]

router.beforeEach((to, from, next) => {
  // 修复h5刷新白屏问题
  if (from.path === '/' && to.path !== '/zh-CN' && process.env.TARO_ENV === 'h5') {
    next('/zh-CN')
    setTimeout(() => {
      window.location.reload()
    }, 50)
    return
  }
  const path = to.path.split('/').pop() as string;
  if (process.env.TARO_ENV !== 'h5' && MINI_NOT_SUPPORT_COMPONENT.includes(path)) {
    Taro.showToast({
      title: '小程序暂不支持该组件',
      icon: 'none'
    })
    next(false);
  } else {
    next(true)
  }
})

export default router
