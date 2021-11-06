import IconGraduationCap from '@/components/icons/IconGraduationCap.vue';
import {
  shallowMount, Wrapper,
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = (): Wrapper<Vue> => shallowMount(IconGraduationCap);

  it('loads successfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-graduation-cap').exists(),
    ).toBe(true);
  });
});
