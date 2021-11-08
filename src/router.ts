/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {
  createRouter,
  createWebHistory,
} from 'vue-router'

/* Vue.use(VueMeta); */

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'CurriculumVitae',
      component: () => import(/* webpackChunkName: "cv" */ '@/views/CurriculumVitae.vue'),
    },
    {
      path: '/cv',
      component: () => import(/* webpackChunkName: "cv" */ '@/views/CurriculumVitae.vue'),
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
        params,
      }) {
        return {
          postId: params.postId,
        };
      },
    },
    {
      path: '/projects',
      component: () => import(/* webpackChunkName: "ProjectList" */ '@/views/ProjectList.vue'),
    },
  ],
});
