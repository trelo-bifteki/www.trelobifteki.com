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
    ],
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


  it('shows interests', () => {
    const store = createStore({
      interests: [
        'one',
      ]
    });
    const wrapper = createWrapper(store);

    expect(
      wrapper.contains('.route-cv__interest')
    ).toBe(true);
  });
});
