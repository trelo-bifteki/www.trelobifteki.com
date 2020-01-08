import Vue from 'vue'
import Vuex from 'vuex'
import store from './store/';

if (!window.Vuex) {
  Vue.use(Vuex);
}

export default new Vuex.Store(store);
