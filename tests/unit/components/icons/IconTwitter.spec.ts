import IconTwitter from '@/components/icons/IconTwitter.vue';
import {
  shallowMount, Wrapper,
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = (): Wrapper<IconTwitter> => shallowMount(IconTwitter);

  it('loads succesfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-twitter').exists(),
    ).toBe(true);
  });
});
