import IconBriefcase from '@/components/icons/IconBriefcase.vue';
import {
  shallowMount, Wrapper,
} from '@vue/test-utils';

describe('IconBriefcase', () => {
  const createWrapper = (): Wrapper<Vue> => shallowMount(IconBriefcase);

  it('loads successfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-briefcase').exists(),
    ).toBe(true);
  });
});
