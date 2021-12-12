import {
  ComponentPublicInstance,
} from 'vue';
import {
  shallowMount, VueWrapper,
} from '@vue/test-utils';
import BlogPost from '@/views/BlogPost.vue';
import {
  Store,
  createStore,
} from 'vuex';
import {
  RootState,
} from '@/store/types';

jest.mock('html-loader!@/assets/posts/howto-write-tickets.md', () => '', {
  virtual: true,
});

describe('BlogPost', () => {
  const defaultState = {
    selectedPostId: '',
    posts: [ {
      id: 1,
      title: 'Demo',
      created: new Date(0),
    }, {
      id: 2,
      title: 'Wrong',
    } ],
    post: {
    },
    postContent: '',
  };

  const actions = {
    refreshPosts: jest.fn(),
  };

  const mutations = {
    updateSelectedPostId: jest.fn(),
  };

  const _createStore = (
    state = defaultState,
  ): Store<RootState> => createStore({
    modules: {
      blog: {
        actions,
        mutations,
        namespaced: true,
        state,
      },
    },
  });

  beforeEach(() => {
    actions.refreshPosts.mockClear();
    mutations.updateSelectedPostId.mockClear();
  });

  const getWrapper = (
    store: Store<RootState>,
  ): VueWrapper<ComponentPublicInstance> => shallowMount(
    BlogPost,
    {
      props: {
        postId: 'howto-write-tickets',
      },
      global: {
        plugins: [
          store,
        ],
        stubs: [
          'SpinningLoader',
          'BlogContent',
        ],
      },
    },
  );

  it('renders the loading bar', () => {
    const store = _createStore();
    const wrapper = getWrapper(store);

    expect(
      wrapper.find('.blog-post--loading').exists(),
    ).toBe(true);
  });

  it('removes the loading bar after fininshing promise', async () => {
    const store = _createStore();
    const wrapper = getWrapper(store);

    await wrapper.vm.$nextTick(); // one for the refreshPosts
    await wrapper.vm.$nextTick(); // one for loading the module
    await wrapper.vm.$nextTick(); // one for loading the module

    expect(
      wrapper.find('.blog-post--loading').exists(),
    ).toBe(false);
  });

  it('refreshes the posts in the beginning', async () => {
    const store = _createStore();
    const wrapper = getWrapper(store);

    await wrapper.vm.$nextTick(); // one for the refreshPosts

    expect(
      actions.refreshPosts,
    ).toHaveBeenCalled();
  });
});
