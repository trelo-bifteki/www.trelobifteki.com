import IconGithub from '@/components/icons/IconGithub.vue';
import {
  shallowMount, Wrapper,
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = (): Wrapper<IconGithub> => shallowMount(IconGithub);

  it('loads succesfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-github').exists(),
    ).toBe(true);
  });
});
