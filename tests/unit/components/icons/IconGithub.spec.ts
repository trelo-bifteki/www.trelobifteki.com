import IconGithub from '@/components/icons/IconGithub.vue';
import {
  shallowMount
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = () => shallowMount(IconGithub);

  it('loads succesfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-github').exists()
    ).toBe(true);
  });
});
