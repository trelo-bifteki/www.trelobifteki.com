import Vue from 'vue';
import Router from 'vue-router';
import CurriculumVitae from '@/components/CurriculumVitae';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'CurriculumVitae',
      component: CurriculumVitae,
    },
    {
      path: '/cv',
      component: CurriculumVitae,
    },
    {
      path: '/blog',
      name: 'BlogView',
      component: () => import(/* webpackChunkName: "blog" */ '@/components/BlogView'),
    },
    {
      path: '/blog/:id',
      component: () => import(/* webpackChunkName: "post" */ '@/components/BlogPost'),
    },
  ],
});
