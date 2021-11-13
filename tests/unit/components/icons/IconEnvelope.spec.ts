import {
  ComponentPublicInstance,
} from 'vue';
import IconEnvelope from '@/components/icons/IconEnvelope.vue';
import {
  shallowMount, VueWrapper,
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = (): VueWrapper<ComponentPublicInstance> => shallowMount(IconEnvelope);

  it('loads succesfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-envelope').exists(),
    ).toBe(true);
  });
});
