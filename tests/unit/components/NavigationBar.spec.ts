import {
  shallowMount, Wrapper,
} from '@vue/test-utils';
import NavigationBar from '@/components/NavigationBar.vue';

describe('NavigationBar', () => {
  const defaultProps = {
    isHorizontal: false,
  };

  const createWrapper = (propsData = defaultProps): Wrapper<NavigationBar> => shallowMount(
    NavigationBar,
    {
      propsData,
      stubs: {
        'router-link': {
          template: '<div class="router-link"><slot /></div>',
        },
      },
    },
  );

  it('loads components', () => {
    const wrapper = createWrapper();
    expect(
      wrapper.find('.navigation-bar').exists(),
    ).toBe(true);
  });

  it('load horizontal class, if is set to true', () => {
    const wrapper = createWrapper({
      isHorizontal: true,
    });
    expect(
      wrapper.find('.navigation-bar__container--horizontal').exists(),
    ).toBe(true);
  })
})
