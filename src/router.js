import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import CurriculumVitae from '@/views/CurriculumVitae';

Vue.use(Router);
Vue.use(Meta);

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
      component: () => import(/* webpackChunkName: "blog" */ '@/views/BlogView'),
    },
    {
      path: '/blog/:id',
      component: () => import(/* webpackChunkName: "post" */ '@/views/BlogPost'),
    },
    {
      path: '/projects',
      component: () => import(/* webpackChunkName: "ProjectList" */ '@/views/ProjectList'),
    }
  ],
});
