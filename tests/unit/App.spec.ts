import App from '@/App.vue';
import {
  RootState,
} from '@/store/types';
import {
  shallowMount,
  createLocalVue,
  Wrapper,
} from '@vue/test-utils';
import Vuex, {
  Store,
} from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('App', () => {
  const createStore = (): Store<RootState> => new Vuex.Store({
    modules: {
      cv: {
        namespaced: true,
        state: {
          packageVersion: '1.0.0',
        },
      },
    },
  });

  const createWrapper = (store: Store<RootState>): Wrapper<Vue> => shallowMount(App, {
    stubs: {
      'router-view': {
        template: '<div class="router-view"></div>',
      },
    },
    store,
    localVue,
  });

  it('loads successfully', () => {
    const store = createStore();
    const wrapper = createWrapper(store);

    expect(
      wrapper.find('.app').exists(),
    ).toBe(true);
  });

  it('sets navigation drawer as hidden', () => {
    const store = createStore();
    const wrapper = createWrapper(store);

    expect(
      wrapper.find('[qa-ref=app__navigation-drawer]').attributes('isvisible'),
    ).toBeUndefined();
  })
});
