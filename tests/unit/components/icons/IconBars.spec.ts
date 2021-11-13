import {
  ComponentPublicInstance,
} from 'vue';
import IconBars from '@/components/icons/IconBars.vue';
import {
  shallowMount, VueWrapper,
} from '@vue/test-utils';

describe('IconBars', () => {
  const createWrapper = (): VueWrapper<ComponentPublicInstance> => shallowMount(IconBars);

  it('loads successfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-bars').exists(),
    ).toBe(true);
  });
});
