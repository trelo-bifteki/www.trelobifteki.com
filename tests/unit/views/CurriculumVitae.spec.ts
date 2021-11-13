/* eslint-env jest */

import {
  shallowMount, VueWrapper,
} from '@vue/test-utils';
import CurriculumVitae from '@/views/CurriculumVitae.vue';
import {
  Store,
  createStore,
} from 'vuex';
import {
  ComponentPublicInstance,
} from 'vue';
import {
  RootState,
} from '@/store/types';
import {
  CurriculumVitaeState,
} from '@/store/cv/types';
import {
  createResume,
} from '../mocks';

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

  const _createStore = (state: CurriculumVitaeState = emptyState): Store<RootState> => createStore({
    modules: {
      cv: {
        actions,
        getters,
        namespaced: true,
        state,
      },
    },
  });

  const createWrapper = (store: Store<RootState>): VueWrapper<ComponentPublicInstance> => shallowMount(
    CurriculumVitae,
    {
      global: {
        plugins: [
          store,
        ],
        stubs: [
          'PersonalInformation',
          'EducationItem',
          'JobItem',
        ],
      },
    },
  );

  const initializeWrapper = async  (): Promise<VueWrapper<ComponentPublicInstance>> => {
    const store = _createStore();
    const wrapper = createWrapper(store);
    await wrapper.vm.$nextTick(); // load skills
    await wrapper.vm.$nextTick(); // load resume
    await wrapper.vm.$nextTick(); // load Promise.all
    return wrapper;
  }

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
    const wrapper = await initializeWrapper();
    expect(
      wrapper.find('[qa-ref=curriculum-vitae-job-item]').exists(),
    ).toBe(true);
  });

  it('shows education item when education is not empty', async () => {
    initMocks();
    getters.education.mockReturnValue([ {
      id: 1,
    } ]);
    const wrapper = await initializeWrapper();

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
    const wrapper = await initializeWrapper();

    expect(
      wrapper.find('.curriculum-vitae__interest').exists(),
    ).toBe(true);
  });
});
