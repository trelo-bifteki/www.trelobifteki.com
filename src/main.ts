import App from './App.vue'
import store from './store'
import router from './router'
/* import VueAnalytics from 'vue-analytics'; */
import {
  createApp,
} from 'vue';

import './scss/index.scss';


/*

const isProduction = process.env.NODE_ENV === 'production';
const isGoogleAnalyticsEnabled = document && document.cookie.includes('_ga');

Vue.use(VueAnalytics, {
  id: 'UA-123405147-1',
  disabled: !isGoogleAnalyticsEnabled,
  router,
  autoTracking: {
    exception: true,
  },
  debug: {
    enabled: !isProduction,
    sendHitTask: isProduction,
  },
});
*/

const app = createApp(App);

app.use(store);
app.use(router);

router.isReady().then(() => {
  app.mount('#app');
});

export default app;
