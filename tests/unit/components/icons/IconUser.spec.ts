import IconUser from '@/components/icons/IconUser.vue';
import {
  shallowMount, Wrapper,
} from '@vue/test-utils';

describe('IconBase', () => {
  const createWrapper = (): Wrapper<Vue> => shallowMount(IconUser);

  it('loads successfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-user').exists(),
    ).toBe(true);
  });
});
