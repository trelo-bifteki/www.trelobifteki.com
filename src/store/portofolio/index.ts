import {
  Module,
} from 'vuex';
import {
  RootState,
} from '../types';
import {
  PortofolioState,
} from './types';

import {
  state,
} from './state';

import {
  mutations,
} from './mutations';

import {
  actions,
} from './actions';

export const portofolio: Module<PortofolioState, RootState> = {
  namespaced: true,
  actions,
  state,
  mutations,
};
