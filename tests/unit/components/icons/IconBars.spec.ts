import IconBars from '@/components/icons/IconBars.vue';
import {
  shallowMount, Wrapper,
} from '@vue/test-utils';

describe('IconBars', () => {
  const createWrapper = (): Wrapper<Vue> => shallowMount(IconBars);

  it('loads successfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-bars').exists(),
    ).toBe(true);
  });
});
