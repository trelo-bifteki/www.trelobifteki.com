import IconLinkedin from '@/components/icons/IconLinkedin.vue';
import {
  shallowMount
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = () => shallowMount(IconLinkedin);

  it('loads succesfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-linkedin').exists()
    ).toBe(true);
  });
});
