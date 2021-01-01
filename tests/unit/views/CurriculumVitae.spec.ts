/* eslint-env jest */

import {
  shallowMount,
  createLocalVue,
  Wrapper,
} from '@vue/test-utils';
import CurriculumVitae from '@/views/CurriculumVitae.vue';
import Vuex, {
  Store,
} from 'vuex';
import {
  RootState,
} from '@/store/types';
import {
  CurriculumVitaeState,
} from '@/store/cv/types';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('CurriculumVitae', () => {

  const actions = {
    refreshPersonalInfo: jest.fn(),
    refreshResume: jest.fn(),
    refreshSkills: jest.fn(),
  };

  const getters = {
    basics: jest.fn(),
    education: jest.fn(),
    interests: jest.fn(),
    work: jest.fn(),
  };

  const emptyState: CurriculumVitaeState = {
    resume: {
    },
    skills: [],
    packageVersion: '',
  };

  const createStore = (state: CurriculumVitaeState = emptyState): Store<RootState> => new Vuex.Store({
    modules: {
      cv: {
        actions,
        getters,
        namespaced: true,
        state,
      },
    },
  });

  const createWrapper = (store: Store<RootState>): Wrapper<Vue> => shallowMount(CurriculumVitae, {
    localVue,
    store,
    stubs: [
      'PersonalInformation',
      'EducationItem',
      'JobItem',
    ],
  });

  beforeEach(() => {
    getters.work.mockClear();
    getters.interests.mockClear();
    getters.education.mockClear();
  });

  it('shows job item when work is not empty', async () => {
    getters.work.mockReturnValue([ {
      id: 1,
    } ]);
    const store = createStore();
    const wrapper = createWrapper(store);
    await wrapper.vm.$nextTick();

    expect(
      wrapper.find('[qa-ref=curriculum-vitae-job-item]').exists(),
    ).toBe(true);
  });

  it('shows education item when education is not empty', async () => {
    getters.education.mockReturnValue([ {
      id: 1,
    } ]);
    const store = createStore();
    const wrapper = createWrapper(store);

    expect(
      wrapper.findComponent({
        name: 'EducationItem',
      }).exists(),
    ).toBe(true);
  });

  it('shows interests', () => {
    getters.interests.mockReturnValue([ {
      name: 'test',
    } ]);
    const store = createStore();
    const wrapper = createWrapper(store);

    expect(
      wrapper.find('.curriculum-vitae__interest').exists(),
    ).toBe(true);
  });
});
