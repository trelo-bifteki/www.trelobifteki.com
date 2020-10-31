import App from '@/App.vue';
import {
  shallowMount
} from '@vue/test-utils';

describe('App', () => {
  const createWrapper = () => shallowMount(App, {
    stubs: {
      'router-view': {
        template: '<div class="router-view"></div>',
      },
    }
  });

  it('loads successfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.app').exists()
    ).toBe(true);
  });

  it('sets navigation drawer as hidden', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('[qa-ref=app__navigation-drawer]').attributes('isvisible')
    ).toBeUndefined();
  })
});