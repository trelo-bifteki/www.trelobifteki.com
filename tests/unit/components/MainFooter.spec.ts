import {
  ComponentPublicInstance,
} from 'vue';
import {
  shallowMount,
  VueWrapper,
} from '@vue/test-utils';
import MainFooter from '@/components/MainFooter.vue';

describe('MainFooter', () => {
  const createWrapper = (packageVersion = ''): VueWrapper<ComponentPublicInstance> => shallowMount(MainFooter, {
    props: {
      packageVersion,
    },
    global: {
    },
  });

  it('renders a non empty package version', () => {
    const packageVersion = '1.1.0';
    const wrapper = createWrapper(packageVersion);

    expect(
      wrapper.find('.main-footer__version').text(),
    ).toBe('1.1.0');
  });
});
