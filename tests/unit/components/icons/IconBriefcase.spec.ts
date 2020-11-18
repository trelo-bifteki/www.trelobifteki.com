import IconBriefcase from '@/components/icons/IconBriefcase.vue';
import {
  shallowMount,
} from '@vue/test-utils';

describe('IconBriefacase', () => {
  const createWrapper = () => shallowMount(IconBriefcase);

  it('loads succesfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-briefcase').exists(),
    ).toBe(true);
  });
});
