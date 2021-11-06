import IconHeart from '@/components/icons/IconHeart.vue';
import {
  shallowMount, Wrapper,
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = (): Wrapper<Vue> => shallowMount(IconHeart);

  it('loads successfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-heart').exists(),
    ).toBe(true);
  });
});
