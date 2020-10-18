import IconEnvelope from '@/components/icons/IconEnvelope.vue';
import {
  shallowMount
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = () => shallowMount(IconEnvelope);

  it('loads succesfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-envelope').exists()
    ).toBe(true);
  });
});
