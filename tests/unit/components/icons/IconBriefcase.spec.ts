import {
  ComponentPublicInstance,
} from 'vue';
import IconBriefcase from '@/components/icons/IconBriefcase.vue';
import {
  shallowMount, VueWrapper,
} from '@vue/test-utils';

describe('IconBriefcase', () => {
  const createWrapper = (): VueWrapper<ComponentPublicInstance> => shallowMount(IconBriefcase);

  it('loads successfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-briefcase').exists(),
    ).toBe(true);
  });
});
