import {
  createLocalVue,
  shallowMount
} from '@vue/test-utils';
import MainFooter from '@/components/MainFooter';
import Vuex from 'vuex'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('MainFooter', () => {
  const createWrapper = store => shallowMount(MainFooter, {
    store,
    localVue,
  });

  const getStore = state => new Vuex.Store({ state, });

  it('renders a non empty package version', () => {
    const packageVersion = '1.1.0';
    const store = getStore({ packageVersion, })
    const wrapper = createWrapper(store);

    expect(
      wrapper.find('.main-footer__version').text()
    ).toBe('1.1.0');
  });
});
