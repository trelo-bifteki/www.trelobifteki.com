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

import {
  RootState,
} from '../types';

const module: Module<CurriculumVitaeState, RootState> = {
  namespaced: true,
  actions,
  getters,
  state,
  mutations,
};

export default module;
