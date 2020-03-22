import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import CurriculumVitae from '@/views/CurriculumVitae';

if (!window.VueRouter) {
  Vue.use(VueRouter);
}

if (!window.Meta) {
  Vue.use(VueMeta);
}

export default new VueRouter({
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
      props({
        params
      }) {
        return {
          blogId: params.blogId,
        };
      },
    },
    {
      path: '/projects',
      component: () => import(/* webpackChunkName: "ProjectList" */ '@/views/ProjectList'),
    }
  ],
});
