import IconUser from '@/components/icons/IconUser.vue';
import {
  shallowMount,
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = () => shallowMount(IconUser);

  it('loads succesfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-user').exists(),
    ).toBe(true);
  });
});
