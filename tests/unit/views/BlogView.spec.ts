import {
  shallowMount,
  createLocalVue,
  Wrapper,
} from '@vue/test-utils';
import BlogView from '@/views/BlogView.vue';
import Vuex, {
  Store,
} from 'vuex';
import {
  RootState,
} from '@/store/types';
import {
  BlogState,
} from '@/store/blog/types';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('BlogView', () => {
  const actions = {
    refreshPosts: jest.fn(),
  };
  const defaultState: BlogState = {
    post: {
    },
    postContent: '',
    posts: [],
    selectedPostId: '',
  };

  const createStore = (state: BlogState = defaultState): Store<RootState> => new Vuex.Store({
    modules: {
      blog: {
        actions,
        namespaced: true,
        state: {
          ...state,
        },
      },
    },
  });
  const createWrapper = (store: Store<RootState>): Wrapper<Vue> => shallowMount(
    BlogView,
    {
      localVue,
      store,
      stubs: [
        'SpinningLoader',
        'PostSummary',
      ],
    },
  );

  beforeEach(() => {
    actions.refreshPosts.mockClear();
  });

  it('should refresh posts when initialized', () => {
    actions.refreshPosts.mockResolvedValue(1);
    const store = createStore();
    createWrapper(store);

    expect(
      actions.refreshPosts,
    ).toHaveBeenCalled();
  })

});
