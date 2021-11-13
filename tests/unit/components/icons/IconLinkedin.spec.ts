import {
  ComponentPublicInstance,
} from 'vue';
import IconLinkedin from '@/components/icons/IconLinkedin.vue';
import {
  shallowMount, VueWrapper,
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = (): VueWrapper<ComponentPublicInstance> => shallowMount(IconLinkedin);

  it('loads successfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-linkedin').exists(),
    ).toBe(true);
  });
});
