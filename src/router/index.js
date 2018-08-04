import Vue from 'vue';
import Router from 'vue-router';
import CurriculumVitae from '@/components/CurriculumVitae';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CurriculumVitae',
      component: CurriculumVitae,
    },
  ],
});
