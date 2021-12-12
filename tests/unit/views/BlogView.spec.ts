import {
  ComponentPublicInstance,
} from 'vue';
import {
  shallowMount,
  VueWrapper,
} from '@vue/test-utils';
import {
  Store,
  createStore,
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
import BlogView from '@/views/BlogView.vue';

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

  const _createStore = (
    state: BlogState = createDefaultState(),
  ): Store<RootState> => createStore({
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
    store: Store<RootState> = _createStore(),
  ): VueWrapper<ComponentPublicInstance> => shallowMount(
    BlogView,
    {
      global: {
        plugins: [
          store,
        ],
      },
    },
  );

  beforeEach(() => {
    actions.refreshPosts.mockReset();
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

    const store = _createStore({
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

    const store = _createStore({
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
