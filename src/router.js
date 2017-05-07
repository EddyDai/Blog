import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Post from '@/components/Post';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/post/:id',
      name: 'post',
      component: Post,
    },
  ],
});
