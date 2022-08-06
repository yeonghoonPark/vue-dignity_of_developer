import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import CallApi from './mixin/api';

createApp(App).use(store).use(router).mixin(CallApi).mount('#app');
