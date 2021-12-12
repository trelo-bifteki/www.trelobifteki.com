import App from '@/App.vue';
import {
  shallowMount, VueWrapper,
} from '@vue/test-utils';
import {
  ComponentPublicInstance,
} from 'vue';

import {
  createStore, Store,
} from 'vuex';

describe('App', () => {
  const _createStore = (): Store<unknown> => createStore({
    modules: {
      cv: {
        namespaced: true,
        state: {
          packageVersion: '1.0.0',
        },
      },
    },
  });

  const createWrapper = (store: Store<unknown>): VueWrapper<ComponentPublicInstance> => shallowMount(App, {
    global: {
      stubs: {
        'router-view': {
          template: '<div class="router-view"></div>',
        },
      },
      plugins: [
        store,
      ],
    },
  });

  it('loads successfully', () => {
    const store = _createStore();
    const wrapper = createWrapper(store);

    expect(
      wrapper.find('.app').exists(),
    ).toBe(true);
  });

  it('sets navigation drawer as hidden', () => {
    const store = _createStore();
    const wrapper = createWrapper(store);

    expect(
      wrapper.find('[qa-ref=app__navigation-drawer]').attributes('isvisible'),
    ).toEqual('false');
  })
});
