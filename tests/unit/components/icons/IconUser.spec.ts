import {
  ComponentPublicInstance,
} from 'vue';
import IconUser from '@/components/icons/IconUser.vue';
import {
  shallowMount, VueWrapper,
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = (): VueWrapper<ComponentPublicInstance> => shallowMount(IconUser);

  it('loads successfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-user').exists(),
    ).toBe(true);
  });
});
