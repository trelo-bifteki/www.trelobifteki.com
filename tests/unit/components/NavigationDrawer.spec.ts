import NavigationDrawer from '@/components/NavigationDrawer.vue';
import {
  shallowMount, Wrapper
} from '@vue/test-utils';

describe('NavigationDrawer', () => {
  const createWrapper = (isVisible = false): Wrapper<NavigationDrawer> => shallowMount(
    NavigationDrawer,
    {
      propsData: {
        isVisible,
      }
    }
  );

  it('loads successfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.navigation-drawer').exists()
    ).toBe(true);
  });

  it('hides by default', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.navigation-drawer--visible').exists()
    ).toBe(false);
  });

  it('is visible if property isVisible=true', () => {
    const wrapper = createWrapper(true);

    expect(
      wrapper.find('.navigation-drawer--visible').exists()
    ).toBe(true);
  })
});
