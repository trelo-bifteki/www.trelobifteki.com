import IconLinkedin from '@/components/icons/IconLinkedin.vue';
import {
  shallowMount, Wrapper,
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = (): Wrapper<Vue> => shallowMount(IconLinkedin);

  it('loads successfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-linkedin').exists(),
    ).toBe(true);
  });
});
