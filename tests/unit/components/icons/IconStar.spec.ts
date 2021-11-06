import IconStar from '@/components/icons/IconStar.vue';
import {
  shallowMount, Wrapper,
} from '@vue/test-utils';

describe('IconStar', () => {
  const createWrapper = (): Wrapper<Vue> => shallowMount(IconStar);

  it('loads successfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-star').exists(),
    ).toBe(true);
  });
});
