/* eslint-env jest */

import {
  shallowMount, VueWrapper,
} from '@vue/test-utils';

import {
  createStore, Store,
} from 'vuex';


import ProjectList from '@/views/ProjectList.vue';
import {
  PortofolioState,
} from '@/store/portofolio/types';

describe('ProjectList.vue', () => {

  const emptyState: PortofolioState = {
    projects: [],
  };

  const actions = {
    loadProjects: jest.fn(),
  };

  const _createStore = (state: PortofolioState = emptyState): Store<unknown> => createStore({
    modules: {
      portofolio: {
        actions,
        namespaced: true,
        state,
      },
    },
  });

  const createWrapper = (store: Store<unknown>): VueWrapper<any> => shallowMount(ProjectList, {
    global: {
      plugins: [
        store,
      ],
    },
  });

  beforeEach(() => {
    actions.loadProjects.mockClear();
  });

  it('loads projects when created', () => {
    const store = _createStore();
    createWrapper(store);

    expect(
      actions.loadProjects,
    ).toHaveBeenCalled();
  });
});
