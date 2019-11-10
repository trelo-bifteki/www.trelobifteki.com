/* eslint-env jest */

import {
  shallowMount,
  createLocalVue,
 } from '@vue/test-utils';
import CurriculumVitae from '@/components/CurriculumVitae';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('CurriculumVitae', () => {

  const actions = {
    refreshEducation: jest.fn(),
    refreshInterests: jest.fn(),
    refreshJobs: jest.fn(),
    refreshPersonalInfo: jest.fn(),
    refreshSkills: jest.fn(),
  };

  const createStore = state => new Vuex.Store({
    modules: {
      cv: {
        namespaced: true,
        state,
        actions,
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
