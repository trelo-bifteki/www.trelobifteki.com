import IconGraduationCap from '@/components/icons/IconGraduationCap.vue';
import {
  shallowMount, Wrapper,
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = (): Wrapper<IconGraduationCap> => shallowMount(IconGraduationCap);

  it('loads succesfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-graduation-cap').exists(),
    ).toBe(true);
  });
});
