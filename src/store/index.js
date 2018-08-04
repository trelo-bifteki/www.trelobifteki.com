import Vue from 'vue';
import Vuex from 'vuex';
import IndexStore from './index.store';

Vue.use(Vuex);

const store = new Vuex.Store(IndexStore);

export default store;
