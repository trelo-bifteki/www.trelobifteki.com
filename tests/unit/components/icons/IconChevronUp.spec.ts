import IconChevronUp from '@/components/icons/IconChevronUp.vue';
import {
  shallowMount,
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = () => shallowMount(IconChevronUp);

  it('loads succesfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-chevron-up').exists(),
    ).toBe(true);
  });
});
