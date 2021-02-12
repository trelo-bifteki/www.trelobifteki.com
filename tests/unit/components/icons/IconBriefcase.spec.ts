import IconBriefcase from '@/components/icons/IconBriefcase.vue';
import {
  shallowMount, Wrapper,
} from '@vue/test-utils';

describe('IconBriefacase', () => {
  const createWrapper = (): Wrapper<IconBriefcase> => shallowMount(IconBriefcase);

  it('loads succesfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-briefcase').exists(),
    ).toBe(true);
  });
});
