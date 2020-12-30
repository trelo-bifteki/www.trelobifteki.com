import {
  actions,
} from './actions';
import getters from './getters';
import mutations from './mutations';
import {
  state,
} from './state';

import {
  CurriculumVitaeState,
} from './types';

import {
  Module,
} from 'vuex';

const module: Module<CurriculumVitaeState, any> = {
  namespaced: true,
  actions,
  getters,
  state,
  mutations,
};

export default module;
