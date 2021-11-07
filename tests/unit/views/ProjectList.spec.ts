/* eslint-env jest */

import {
  shallowMount,
  createLocalVue,
  Wrapper,
} from '@vue/test-utils';

import Vuex, {
  Store,
} from 'vuex';

import ProjectList from '@/views/ProjectList.vue';
import {
  PortofolioState,
} from '@/store/portofolio/types';
import {
  RootState,
} from '@/store/types';

describe('ProjectList.vue', () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);

  const emptyState: PortofolioState = {
    projects: [],
  };

  const actions = {
    loadProjects: jest.fn(),
  };

  const createStore = (state: PortofolioState = emptyState): Store<RootState> => new Vuex.Store({
    modules: {
      portofolio: {
        actions,
        namespaced: true,
        state,
      },
    },
  });

  const createWrapper = (store: Store<RootState>): Wrapper<Vue> => shallowMount(ProjectList, {
    localVue,
    store,
  });

  beforeEach(() => {
    actions.loadProjects.mockClear();
  });

  it('loads projects when created', () => {
    const store = createStore();
    createWrapper(store);

    expect(
      actions.loadProjects,
    ).toHaveBeenCalled();
  });
});
