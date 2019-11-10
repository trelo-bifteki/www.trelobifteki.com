import {
  shallowMount,
  createLocalVue,
} from '@vue/test-utils';
import BlogPost from '@/components/BlogPost';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('BlogPost', () => {
  const $route = {
    params: {
      id: 1
    }
  };

  const defaultState = {
      selectedPostId: '',
      posts: [{
        id: 1,
        title: 'Demo',
        created: new Date(0),
      }, {
        id: 2,
        title: 'Wrong'
      }],
      post: {},
      postContent: '',
  };

  const actions = {
    refreshPosts: jest.fn(),
  };

  const mutations = {
    updateSelectedPostId: jest.fn(),
  };

  const createStore = state => new Vuex.Store({
    modules: {
      blog: {
        namespaced: true,
        state: {
          ...defaultState,
          ...state,
        },
        actions,
        mutations,
      }
    },
  });

  beforeEach(() => {
    actions.refreshPosts.mockClear();
    mutations.updateSelectedPostId.mockClear();
  });

  const getWrapper = store => shallowMount(BlogPost, {
    store,
    localVue,
    mocks: {
      $route,
    },
    stubs: [
      'SpinningLoader',
      'BlogContent'
    ]
  });

  it('renders the loading bar', () => {
    const store = createStore({});
    const wrapper = getWrapper(store);

    expect(
      wrapper.contains('.blog-post--loading')
    ).toBe(true);
  });

  it('removes the loading bar after fininshing promise', async () => {
    const store = createStore({});
    const wrapper = getWrapper(store);

    await wrapper.vm.$nextTick(); // one for the refreshPosts
    await wrapper.vm.$nextTick(); // one for loading the module

    expect(
      wrapper.contains('.blog-post--loading')
    ).toBe(false);
  });

  it('refreshes the posts in the beginning', async () => {
    const store = createStore({});
    const wrapper = getWrapper(store);

    await wrapper.vm.$nextTick(); // one for the refreshPosts

    expect(
      actions.refreshPosts
    ).toHaveBeenCalled();
  });
});
