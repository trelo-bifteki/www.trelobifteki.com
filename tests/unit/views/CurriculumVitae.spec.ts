/* eslint-env jest */

import {
  shallowMount,
  createLocalVue,
} from '@vue/test-utils';
import CurriculumVitae from '@/views/CurriculumVitae.vue';
import Vuex from 'vuex';

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

  const emptyState = {
  };

  const createStore = (state: any = emptyState) => new Vuex.Store({
    modules: {
      cv: {
        actions,
        getters,
        namespaced: true,
        state,
      }
    }
  });

  const createWrapper = (store: any) => shallowMount(CurriculumVitae, {
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
    getters.work.mockReturnValue([{
      id: 1,
    }]);
    const store = createStore({
    });
    const wrapper = createWrapper(store);
    await wrapper.vm.$nextTick();

    expect(
      wrapper.find('[qa-ref=curriculum-vitae-job-item]').exists()
    ).toBe(true);
  });

  it('shows education item when education is not empty', async () => {
    getters.education.mockReturnValue([{
      id: 1,
    }]);
    const store = createStore({
    });
    const wrapper = createWrapper(store);

    expect(
      wrapper.findComponent({
        name: 'EducationItem'
      }).exists()
    ).toBe(true);
  });

  it('shows interests', () => {
    getters.interests.mockReturnValue([{
      name: 'test',
    }]);
    const store = createStore();
    const wrapper = createWrapper(store);

    expect(
      wrapper.find('.curriculum-vitae__interest').exists()
    ).toBe(true);
  });
});
