import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
// import Business from './views/business/index.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: '首页',
        type: 'login', // 是否需要判断是否登录,这里是需要判断
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      meta: {
        title: 'about',
        type: 'login', // 是否需要判断是否登录,这里是需要判断
      },
    },
    {
      path: '/business',
      name: 'business',
      component: () => import(/* webpackChunkName: "about" */ './views/business'),
      meta: {
        title: 'business',
        type: 'login', // 是否需要判断是否登录,这里是需要判断
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/login'),
    },
  ],
});
