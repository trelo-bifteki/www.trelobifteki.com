import {
  ComponentPublicInstance,
} from 'vue';
import IconTwitter from '@/components/icons/IconTwitter.vue';
import {
  shallowMount, VueWrapper,
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = (): VueWrapper<ComponentPublicInstance> => shallowMount(IconTwitter);

  it('loads successfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-twitter').exists(),
    ).toBe(true);
  });
});
