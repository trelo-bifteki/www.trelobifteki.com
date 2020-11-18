import IconBars from '@/components/icons/IconBars.vue';
import {
  shallowMount,
} from '@vue/test-utils';

describe('IconBars', () => {
  const createWrapper = () => shallowMount(IconBars);

  it('loads succesfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-bars').exists(),
    ).toBe(true);
  });
});
