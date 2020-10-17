import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMeta from 'vue-meta';
import CurriculumVitae from '@/views/CurriculumVitae.vue';

const _window = window as any;
if (!_window.VueRouter) {
  Vue.use(VueRouter);
}

if (!_window.Meta) {
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
      component: () => import(/* webpackChunkName: "blog" */ '@/views/BlogView.vue'),
    },
    {
      path: '/blog/:postId',
      component: () => import(/* webpackChunkName: "post" */ '@/views/BlogPost.vue'),
      props({
        params
      }) {
        return {
          postId: params.postId,
        };
      },
    },
    {
      path: '/projects',
      component: () => import(/* webpackChunkName: "ProjectList" */ '@/views/ProjectList.vue'),
    }
  ],
});
