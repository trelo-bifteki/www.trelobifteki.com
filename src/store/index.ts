import cv from './cv';
import blog from './blog';
import {
  portofolio,
} from './portofolio';

import {
  StoreOptions,
} from 'vuex';
import {
  RootState,
} from './types';

export const store: StoreOptions<RootState> = {
  modules: {
    cv,
    blog,
    portofolio,
  },
};
