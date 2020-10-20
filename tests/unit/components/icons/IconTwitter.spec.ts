import IconTwitter from '@/components/icons/IconTwitter.vue';
import {
  shallowMount
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = () => shallowMount(IconTwitter);

  it('loads succesfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-twitter').exists()
    ).toBe(true);
  });
});
