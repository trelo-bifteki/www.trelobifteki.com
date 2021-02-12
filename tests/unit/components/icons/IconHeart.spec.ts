import IconHeart from '@/components/icons/IconHeart.vue';
import {
  shallowMount, Wrapper,
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = (): Wrapper<IconHeart> => shallowMount(IconHeart);

  it('loads succesfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-heart').exists(),
    ).toBe(true);
  });
});
