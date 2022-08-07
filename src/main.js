import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import CallApi from './mixin/api';
import i18nPlugin from './plugins/i18n.js';

const i18nStrings = {
  en: {
    hi: 'Hello!',
    save: 'Save',
  },
  ko: {
    hi: '안녕하세요!',
    save: '저장',
  },
};

createApp(App)
  .use(store)
  .use(router)
  .use(i18nPlugin, i18nStrings)
  .mixin(CallApi)
  .directive('focus', {
    mounted(element) {
      element.focus();
    },
  })
  .mount('#app');
