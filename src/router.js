import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import Login from './views/Login';

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
});

Vue.use(Router);

export default router;
