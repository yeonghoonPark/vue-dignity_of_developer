import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'AboutView',
    component: () =>
      import(/* webpackChunkName: 'about' */ '../views/AboutView.vue'),
  },
  {
    path: '/serverdata',
    name: 'ServerDataView',
    component: () =>
      import(
        /* webpackChunkName: 'serverdata', webpackPrefetch: true */ '../views/ServerDataView.vue'
      ),
  },
  {
    path: '/example',
    name: 'ExampleView',
    component: () =>
      import(
        /* webpackChunkName: 'example', webpackPrefetch: true */ '../views/ExampleView.vue'
      ),
  },
  {
    path: '/example2',
    name: 'ExampleView2',
    component: () =>
      import(
        /* webpackChunkName: 'example', webpackPrefetch: true */ '../views/ExampleView2.vue'
      ),
  },
  {
    path: '/slot',
    name: 'SlotUseModalLayout',
    component: () =>
      import(
        /* webpackChunkName: 'slot', webpackPrefecth: true */ '../views/SlotUseModalLayout.vue'
      ),
  },
  {
    path: '/provideinject',
    name: 'ProvideInject',
    component: () =>
      import(
        /* webpackChunkName: 'providinject', webpackPrefecth: true */ '../views/ProvideInject.vue'
      ),
  },
  {
    path: '/mixin',
    name: 'MixinView',
    component: () =>
      import(
        /* webpackChunkName: 'mixin', webpackPrefecth: true */ '../views/MixinView.vue'
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
