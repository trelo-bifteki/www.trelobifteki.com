import IconStar from '@/components/icons/IconStar.vue';
import {
  shallowMount, Wrapper,
} from '@vue/test-utils';

describe('IconStar', () => {
  const createWrapper = (): Wrapper<IconStar> => shallowMount(IconStar);

  it('loads succesfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-star').exists(),
    ).toBe(true);
  });
});
