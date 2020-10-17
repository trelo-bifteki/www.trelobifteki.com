import {
  shallowMount,
  createLocalVue,
} from '@vue/test-utils';
import BlogView from '@/views/BlogView';
import Vuex from 'vuex';

const localVue = createLocalVue();
const emptyState = {
};

localVue.use(Vuex);

describe('BlogView', () => {
  const actions = {
    refreshPosts: jest.fn(),
  };
  const defaultState = {
    post: {
    },
    postContent: '',
    posts: [],
    selectedPostId: '',
  };
  const createStore = (state: any = emptyState) => new Vuex.Store({
    modules: {
      blog: {
        actions,
        namespaced: true,
        state: {
          ...defaultState,
          ...state,
        },
      },
    },
  });
  const createWrapper = (store: any) => shallowMount(
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
      actions.refreshPosts
    ).toHaveBeenCalled();
  })

});
