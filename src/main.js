// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App.vue';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.productionTip = false;

const routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: '/seller', component: seller}
];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});

// components:{ App }  vue1.0的写法
// render: h => h(App) vue2.0的写法
// render函数是渲染一个视图，然后提供给el挂载，如果没有render那页面什么都不会出来

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

// router.push('/goods');
