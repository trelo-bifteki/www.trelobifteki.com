import {
  ComponentPublicInstance,
} from 'vue';
import IconChevronUp from '@/components/icons/IconChevronUp.vue';
import {
  shallowMount, VueWrapper,
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = (): VueWrapper<ComponentPublicInstance> => shallowMount(IconChevronUp);

  it('loads successfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-chevron-up').exists(),
    ).toBe(true);
  });
});
