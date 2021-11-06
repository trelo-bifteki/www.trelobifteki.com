import IconEnvelope from '@/components/icons/IconEnvelope.vue';
import {
  shallowMount, Wrapper,
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = (): Wrapper<Vue> => shallowMount(IconEnvelope);

  it('loads succesfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-envelope').exists(),
    ).toBe(true);
  });
});
