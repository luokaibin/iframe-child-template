import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/Layout';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/index',
          name: 'Index',
          component: () => import(/* webpackChunkName: "Home" */'@/views/Home.vue'),
        },
      ],
    },
  ],
});
