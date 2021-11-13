import {
  ComponentPublicInstance,
} from 'vue';
import IconHeart from '@/components/icons/IconHeart.vue';
import {
  shallowMount, VueWrapper,
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = (): VueWrapper<ComponentPublicInstance> => shallowMount(IconHeart);

  it('loads successfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-heart').exists(),
    ).toBe(true);
  });
});
