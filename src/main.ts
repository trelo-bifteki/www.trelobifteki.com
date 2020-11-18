import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueAnalytics from 'vue-analytics';

import './scss/index.scss';

Vue.config.productionTip = false

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

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
