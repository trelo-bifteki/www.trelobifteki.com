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
import {
  createResume,
} from '../mocks';

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
    latestWork: jest.fn(),
    work: jest.fn(),
    profiles: jest.fn(),
    location: jest.fn(),
  };

  const emptyState: CurriculumVitaeState = {
    resume: createResume(),
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
    getters.basics.mockClear();
    getters.work.mockClear();
    getters.interests.mockClear();
    getters.education.mockClear();
    getters.latestWork.mockClear();
    getters.profiles.mockClear();
    getters.location.mockClear();
  });

  const initMocks = (): void => {
    getters.basics.mockReturnValue({
      name: 'Max Mustermann',
      label: 'Developer',
    });
    getters.latestWork.mockReturnValue({
      name: 'Acme',
    });
    getters.profiles.mockReturnValue([]);
    getters.location.mockReturnValue({
      id: 1,
    });
  }

  it('shows job item when work is not empty', async () => {
    initMocks();
    getters.work.mockReturnValue([ {
      id: 1,
    } ]);
    const store = createStore();
    const wrapper = createWrapper(store);
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();

    expect(
      wrapper.find('[qa-ref=curriculum-vitae-job-item]').exists(),
    ).toBe(true);
  });

  it('shows education item when education is not empty', async () => {
    initMocks();
    getters.education.mockReturnValue([ {
      id: 1,
    } ]);
    const store = createStore();
    const wrapper = createWrapper(store);
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();

    expect(
      wrapper.findComponent({
        name: 'EducationItem',
      }).exists(),
    ).toBe(true);
  });

  it('shows interests', async () => {
    initMocks();
    getters.interests.mockReturnValue([ {
      name: 'test',
    } ]);
    const store = createStore();
    const wrapper = createWrapper(store);
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();

    expect(
      wrapper.find('.curriculum-vitae__interest').exists(),
    ).toBe(true);
  });
});
