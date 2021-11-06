import IconGithub from '@/components/icons/IconGithub.vue';
import {
  shallowMount, Wrapper,
} from '@vue/test-utils';

describe('IconGithub', () => {
  const createWrapper = (): Wrapper<Vue> => shallowMount(IconGithub);

  it('loads successfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-github').exists(),
    ).toBe(true);
  });
});
