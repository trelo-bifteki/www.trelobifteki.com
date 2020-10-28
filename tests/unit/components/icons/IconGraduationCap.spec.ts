import IconGraduationCap from '@/components/icons/IconGraduationCap.vue';
import {
  shallowMount
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = () => shallowMount(IconGraduationCap);

  it('loads succesfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-graduation-cap').exists()
    ).toBe(true);
  });
});
