import IconEducationCap from '@/components/icons/IconEducationCap.vue';
import {
  shallowMount
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = () => shallowMount(IconEducationCap);

  it('loads succesfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-graduation-cap').exists()
    ).toBe(true);
  });
});
