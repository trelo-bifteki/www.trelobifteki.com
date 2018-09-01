import Vue from 'vue';
import Router from 'vue-router';
import CurriculumVitae from '@/components/CurriculumVitae';
import BlogPost from '@/components/BlogPost';
import BlogView from '@/components/BlogView';

Vue.use(Router);

export default new Router({
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
      component: BlogView,
    },
    {
      path: '/blog/:id',
      component: BlogPost,
    },
  ],
});
