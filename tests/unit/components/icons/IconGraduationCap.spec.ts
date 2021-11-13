import {
  ComponentPublicInstance,
} from 'vue';
import IconGraduationCap from '@/components/icons/IconGraduationCap.vue';
import {
  shallowMount, VueWrapper,
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = (): VueWrapper<ComponentPublicInstance> => shallowMount(IconGraduationCap);

  it('loads successfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-graduation-cap').exists(),
    ).toBe(true);
  });
});
