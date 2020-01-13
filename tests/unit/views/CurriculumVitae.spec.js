/* eslint-env jest */

import {
  shallowMount,
  createLocalVue,
} from '@vue/test-utils';
import CurriculumVitae from '@/views/CurriculumVitae';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('CurriculumVitae', () => {

  const actions = {
    refreshResume: jest.fn(),
    refreshEducation: jest.fn(),
    refreshInterests: jest.fn(),
    refreshJobs: jest.fn(),
    refreshPersonalInfo: jest.fn(),
    refreshSkills: jest.fn(),
  };

  const getters = {
    basics: jest.fn(),
    work: jest.fn(),
  };

  const createStore = state => new Vuex.Store({
    modules: {
      cv: {
        namespaced: true,
        actions,
        getters,
        state,
      }
    }
  });

  const createWrapper = store => shallowMount(CurriculumVitae, {
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
  });

  it('refreshes education', () =>  {
    const store = createStore({});
    createWrapper(store);

    expect(
      actions.refreshEducation
    ).toHaveBeenCalled();
  });

  it('refreshes interests', () =>  {
    const store = createStore({});
    createWrapper(store);

    expect(
      actions.refreshInterests
    ).toHaveBeenCalled();
  });

  it('shows job item when work is not empty', async () => {
    getters.work.mockReturnValue([{
      id: 1,
    }]);
    const store = createStore({});
    const wrapper = createWrapper(store);
    await wrapper.vm.$nextTick();

    expect(
      wrapper.contains('[qa-ref=curriculum-vitae-job-item]')
    ).toBe(true);
  });

  it('shows interests', () => {
    const store = createStore({
      interests: [
        'one',
      ]
    });
    const wrapper = createWrapper(store);

    expect(
      wrapper.contains('.curriculum-vitae__interest')
    ).toBe(true);
  });
});
