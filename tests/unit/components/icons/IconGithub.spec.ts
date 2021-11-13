import {
  ComponentPublicInstance,
} from 'vue';
import IconGithub from '@/components/icons/IconGithub.vue';
import {
  shallowMount, VueWrapper,
} from '@vue/test-utils';

describe('IconGithub', () => {
  const createWrapper = (): VueWrapper<ComponentPublicInstance> => shallowMount(IconGithub);

  it('loads successfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-github').exists(),
    ).toBe(true);
  });
});
