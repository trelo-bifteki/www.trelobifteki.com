import IconUser from '@/components/icons/IconUser.vue';
import {
  shallowMount, Wrapper,
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = (): Wrapper<IconUser> => shallowMount(IconUser);

  it('loads succesfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-user').exists(),
    ).toBe(true);
  });
});
