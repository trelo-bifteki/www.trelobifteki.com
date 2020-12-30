import Vue from 'vue'
import Vuex from 'vuex'
import {
  store,
} from './store/';

const _window = window as any;

if (!_window.Vuex) {
  Vue.use(Vuex);
}

export default new Vuex.Store(store);
