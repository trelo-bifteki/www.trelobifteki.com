import {
  shallowMount,
  createLocalVue,
} from '@vue/test-utils';
import BlogPost from '@/views/BlogPost.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('BlogPost', () => {
  const defaultState = {
    selectedPostId: '',
    posts: [{
      id: 1,
      title: 'Demo',
      created: new Date(0),
    }, {
      id: 2,
      title: 'Wrong',
    }],
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

  const createStore = (state: any) => new Vuex.Store({
    modules: {
      blog: {
        actions,
        mutations,
        namespaced: true,
        state: {
          ...defaultState,
          ...state,
        },
      },
    },
  });

  beforeEach(() => {
    actions.refreshPosts.mockClear();
    mutations.updateSelectedPostId.mockClear();
  });

  const getWrapper = (store: any) => shallowMount(BlogPost, {
    localVue,
    propsData: {
      postId: 'howto-write-tickets',
    },
    store,
    stubs: [
      'SpinningLoader',
      'BlogContent',
    ],
  });

  it('renders the loading bar', () => {
    const store = createStore({
    });
    const wrapper = getWrapper(store);

    expect(
      wrapper.find('.blog-post--loading').exists(),
    ).toBe(true);
  });

  it('removes the loading bar after fininshing promise', async () => {
    const store = createStore({
    });
    const wrapper = getWrapper(store);

    await wrapper.vm.$nextTick(); // one for the refreshPosts
    await wrapper.vm.$nextTick(); // one for loading the module
    await wrapper.vm.$nextTick(); // one for loading the module

    expect(
      wrapper.find('.blog-post--loading').exists(),
    ).toBe(false);
  });

  it('refreshes the posts in the beginning', async () => {
    const store = createStore({
    });
    const wrapper = getWrapper(store);

    await wrapper.vm.$nextTick(); // one for the refreshPosts

    expect(
      actions.refreshPosts,
    ).toHaveBeenCalled();
  });
});
