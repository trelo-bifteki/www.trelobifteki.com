import {
  createLocalVue,
  shallowMount
} from '@vue/test-utils';
import PersonalInformation from '@/components/PersonalInformation';
import Vuex from 'vuex'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('PersonalInformation', () => {
  const getWrapper = store => shallowMount(PersonalInformation, {
    store,
    localVue,
  });
  const getStore = state => new Vuex.Store({
    modules: {
      cv: {
        namespaced: true,
        state,
        actions: {
          refreshPersonalInfo: jest.fn(),
        }
      },
    },
  });


  it('renders fullname', () => {
    const store = getStore({
      personalInfo: {
        fullname: 'Lampros Papadimitriou',
      },
    });
    const wrapper = getWrapper(store);

    expect(
      wrapper.find('.personal-information__fullname').text()
    ).toBe('Lampros Papadimitriou')
  });
});
