import {
  shallowMount,
  createLocalVue,
} from '@vue/test-utils';
import BlogView from '@/components/BlogView';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('BlogView', () => {
  const actions = {
    refreshPosts: jest.fn(),
  };
  const defaultState = {
      selectedPostId: '',
      posts: [],
      post: {},
      postContent: '',
  };
  const createStore = state => new Vuex.Store({
    modules: {
      BlogStore: {
        namespaced: true,
        state: {
          ...defaultState,
          state,
        },
        actions,
      }
    },
  });
  const createWrapper = store => shallowMount(
    BlogView,
    {
      store,
      localVue,
      stubs: [
        'SpinningLoader',
        'PostSummary',
      ],
    },
  );

  beforeEach(() => {
    actions.refreshPosts.mockReset();
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