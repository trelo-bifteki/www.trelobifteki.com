import IconChevronUp from '@/components/icons/IconChevronUp.vue';
import {
  shallowMount, Wrapper,
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = (): Wrapper<IconChevronUp> => shallowMount(IconChevronUp);

  it('loads succesfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-chevron-up').exists(),
    ).toBe(true);
  });
});
