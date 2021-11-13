import {
  ComponentPublicInstance,
} from 'vue';
import IconStar from '@/components/icons/IconStar.vue';
import {
  shallowMount, VueWrapper,
} from '@vue/test-utils';

describe('IconStar', () => {
  const createWrapper = (): VueWrapper<ComponentPublicInstance> => shallowMount(IconStar);

  it('loads successfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-star').exists(),
    ).toBe(true);
  });
});
