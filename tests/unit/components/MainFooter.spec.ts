import {
  ComponentPublicInstance,
} from 'vue';
import {
  createLocalVue,
  shallowMount,
  Wrapper,
} from '@vue/test-utils';
import MainFooter from '@/components/MainFooter.vue';
import Vuex from 'vuex'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('MainFooter', () => {
  const createWrapper = (packageVersion = ''): VueWrapper<ComponentPublicInstance> => shallowMount(MainFooter, {
    props: {
      packageVersion,
    },
    localVue,
  });

  it('renders a non empty package version', () => {
    const packageVersion = '1.1.0';
    const wrapper = createWrapper(packageVersion);

    expect(
      wrapper.find('.main-footer__version').text(),
    ).toBe('1.1.0');
  });
});
