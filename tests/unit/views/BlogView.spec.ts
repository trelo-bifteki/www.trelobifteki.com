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
  BlogPost,
  BlogState,
} from '@/store/blog/types';

import PostSummary from '@/components/PostSummary.vue';
import SpinningLoader from '@/components/SpinningLoader.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('BlogView', () => {
  const actions = {
    refreshPosts: jest.fn(),
  };

  const createPost = (id = 'test'): BlogPost => ({
    id,
    title: `Post ${id}`,
    created: 1613845690000,
    isVisible: true,
    tags: [],
  });

  const createDefaultState = (): BlogState => ({
    post: createPost(),
    postContent: '',
    posts: [
      createPost(),
    ],
    selectedPostId: '',
  });

  const createStore = (
    state: BlogState = createDefaultState(),
  ): Store<RootState> => new Vuex.Store({
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

  const createWrapper = (
    store: Store<RootState> = createStore(),
  ): Wrapper<BlogView> => shallowMount(
    BlogView,
    {
      localVue,
      store,
    },
  );

  beforeEach(() => {
    actions.refreshPosts.mockClear();
  });

  it('should refresh posts when initialized', () => {
    createWrapper();

    expect(
      actions.refreshPosts,
    ).toHaveBeenCalled();
  });

  it('should render spinning loader before loading completed', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.findComponent(SpinningLoader).exists(),
    ).toBe(true);
  });

  it('should render one visible post after loading completed', async () => {
    const wrapper = createWrapper();

    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();

    expect(
      wrapper.findComponent({
        name: 'PostSummary',
      }).exists(),
    ).toBe(true);
  });

  it('should render one visible post when another hidden post provided', async () => {
    const invisiblePost = createPost('another');
    invisiblePost.isVisible = false;

    const store = createStore({
      ...createDefaultState(),
      posts: [
        createPost(),
        invisiblePost,
      ],
    });
    const wrapper = createWrapper(store);

    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();

    expect(
      wrapper.findAllComponents(PostSummary).length,
    ).toEqual(1);
  });

  it('should have the newest post as first', async () => {
    const post = createPost();
    const newestPost = createPost('another');
    newestPost.created = post.created + 60000;

    const store = createStore({
      ...createDefaultState(),
      posts: [
        createPost(),
        newestPost,
      ],
    });
    const wrapper = createWrapper(store);

    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();

    expect(
      wrapper.findComponent(PostSummary).attributes('title'),
    ).toEqual('another');
  });
});
