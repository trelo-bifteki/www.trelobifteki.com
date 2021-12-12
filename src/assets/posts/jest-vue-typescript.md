In this tutorial we are going to create freshly hand-made unit tests using the
following ingredients:

*   Vue3
*   eslint
*   Jest
*   Typescript
*   Vuex

I am writing this guide because it is hard to find good full examples on the
internet using all technologies mentioned above together. I will also mention
all parts where it took me the most time to find a solution.

I will also use real examples from the code I developed for my own website. I
omit the styling, since it is not needed for this topic.

## Eslint configuration

I am usually using the following rulesets in eslint:

```javascript
module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/recommended",
    '@vue/typescript'
  ],
}
```

I also suggest that everyone to use them from the very beginning especially
if you are migrating a project into Typescript. The following rules took me
quite some time to correct in code:

*   _typescript-eslint/no-explicit-any_
*   _typescript-eslint/explicity-function-return-type

## Recipe for stateless components

A _stateless_ component is the one that does not include any bindings or states
from Vuex or other resources. Inputs and outputs are only defined as
_properties_ and _events_ respectively.

Let's assume we have the following small component:

```typescript
<script lang="ts">
import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'IconBase',
  props: {
    width: {
      type: [ String, Number ],
      default: '16px',
    },
    height: {
      type: [ String, Number ],
      default: '16px',
    },
    iconColor: {
      type: String,
      default: 'default',
    },
    iconName: {
      type: String,
      default: '',
    },
    inverted: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    iconGroupClasses(): string[] {
      return [
        'icon-base__group',
        `icon-base__group--${this.iconColor}`,
      ];
    },
    rootClasses(): string [] {
      const classes = [ 'icon-base' ];
      if (this.inverted) {
        classes.push('icon-base--inverted');
      }

      return classes;
    },
  },
})
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    role="presentation"
    :class="rootClasses"
  >
    <g :class="iconGroupClasses">
      <slot />
    </g>
  </svg>
</template>
```

For the component above I created the following unit tests:

```typescript
import {
  ComponentPublicInstance,
} from 'vue';
import IconBase from '@/components/icons/IconBase.vue';
import {
  shallowMount, VueWrapper,
} from '@vue/test-utils';

const defaultProps = {
  iconName: 'testName',
  width: '20px',
  inverted: false,
  iconColor: 'default',
};

describe('IconBase', () => {
  const createWrapper = (props= defaultProps): VueWrapper<ComponentPublicInstance> => shallowMount(IconBase, {
    props,
  });

  it('loads successfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-base').exists(),
    ).toBe(true);
  });

  it('renders parameter iconName as aria-labelledby', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-base').attributes('aria-labelledby'),
    ).toEqual('testName');
  });

  it('renders width parameter as icon width', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-base').attributes('width'),
    ).toEqual('20px');
  });

  it('renders group color as red', () => {
    const wrapper = createWrapper({
      ...defaultProps,
      iconColor: 'red',
    });

    expect(
      wrapper.find('.icon-base__group').classes(),
    ).toEqual([
      'icon-base__group',
      'icon-base__group--red',
    ]);
  });

  it('inverts icon when invert=true', () => {
    const wrapper = createWrapper({
      ...defaultProps,
      inverted: true,
    });

    expect(
      wrapper.find('.icon-base--inverted').exists(),
    ).toBe(true);
  });
});
```

The most important rules that I used were the following:

*   I am trying to use only once `expect` in each function.
*   I always create the function `createWrapper` with all required inputs
*   I introduce `defaultProps` with the default and required values
*   I use `defaultProps` as the default parameter for `createWrapper`

It took me a long research and experiments to find
`VueWrapper<ComponentPublicInstance>` as return trype for `createWrapper`
function. I also introduce the `defaultProps` in order to have autocompletion,
avoid DRY and type checking.

A `createWrapper` function is always invoked by every single test. Our goal is
to make each test completely _stateless_. Always make sure that all your tests
will not have conflicts with each other, since they can run _in parallel_ in
different threads.

## Recipe for stateful components

A stateful component is a component in my applications and it uses _Vuex_ as
input and output.

Taking the example below:

```typescript
<script lang="ts">
import {
  defineComponent,
} from 'vue';

import PostSummary from '@/components/PostSummary.vue';
import SpinningLoader from '@/components/SpinningLoader.vue';
import {
  createNamespacedHelpers,
} from 'vuex';


import {
  BlogPost,
} from '@/store/blog/types';

const {
  mapActions,
  mapState,
} = createNamespacedHelpers('blog');


export default defineComponent({
  name: 'BlogView',
  components: {
    PostSummary,
    SpinningLoader,
  },
  metaInfo: {
    title: 'Blog',
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapState([
      'posts',
    ]),
    visiblePostsOrderByDateDesc(): ReadonlyArray<BlogPost> {
      const visiblePosts = this.posts.filter((post: BlogPost) => post.isVisible);
      visiblePosts.sort((one: BlogPost, another: BlogPost) => another.created - one.created);
      return visiblePosts;
    },
  },
  async created(): Promise<void> {
    this.isLoading = true;
    try {
      await this.refreshPosts();
    } finally {
      this.isLoading = false;
    }
  },
  methods: {
    ...mapActions([
      'refreshPosts',
    ]),
  },
});
</script>

<template>
  <div class="blog-view">
    <h1 class="blog-view__headline">
      <i class="icon-heart" />
      Blog
    </h1>
    <div
      v-if="isLoading"
      class="blog-view__spinner"
    >
      <SpinningLoader />
    </div>
    <section
      v-else
      class="blog-view__container"
    >
      <PostSummary
        v-for="post in visiblePostsOrderByDateDesc"
        :key="post.id"
        class="blog-view__post"
        :post="post"
        :title="post.id"
      />
    </section>
  </div>
</template>
```

I implemented the following unit test for it:

```typescript
import {
  shallowMount,
  createLocalVue,
  Wrapper,
} from '@vue/test-utils';
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
import BlogView from '@/views/BlogView.vue';

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
```

Basic rules for creating this file are the following:

*   I instantiate `wrapper` in each unit test
*   I instantiate `store` in each unit test
*   All action methods are mocked using `jest.fn()`
*   I reset actions before each test using `actions.refreshPosts.mockClear()`

# Recipe for mocking dependencies

Another case is the need to mock a service (most usually a http service) that
we use inside a vue component. Let's take the example below:

```typescript
import gdprService from '@/services/localStorage';
import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'CookieNotification',
  data() {
    return {
      isVisible: false,
      googleAnalytics: null,
    };
  },
  mounted() {
    this.isVisible = !gdprService.isGdprAccepted();
  },
  methods: {
    accept(): void {
      gdprService.acceptGdpr();
      this.isVisible = false;
    },
    deny(): void {
      gdprService.acceptGdpr();
      this.isVisible = false;
    },
  },
});
</script>
<template>
  <transition name="slide-up">
    <div
      v-if="isVisible"
      class="cookie-notification"
      qa-ref="cookie-notification"
    >
      Hey! This site uses cookies for Google Analytics
      <div class="cookie-notification__actions">
        <button
          class="cookie-notification__button cookie-notification__button--ok"
          qa-ref="cookie-notification-button-yes"
          @click="accept"
        >
          Got it!
        </button>
        <button
          class="cookie-notification__button cookie-notification__button--no"
          qa-ref="cookie-notification-button-no"
          @click="deny"
        >
          No way!
        </button>
      </div>
    </div>
  </transition>
</template>

```

And this is the unit test I have written for this:

```typescript
import {
  ComponentPublicInstance,
} from 'vue';
import CookieNotification from '@/components/CookieNotification.vue';
import {
  shallowMount, VueWrapper,
} from '@vue/test-utils';
import {
  mocked,
} from 'ts-jest';

import gdprService from '@/services/localStorage';

jest.mock('@/services/localStorage');

describe('CookieNotification', () => {
  const $ga = {
    enable: jest.fn(),
    page: jest.fn(),
    disable: jest.fn(),
  };

  const mockedGdprService = mocked(gdprService);

  const getWrapper = (): VueWrapper<ComponentPublicInstance> => shallowMount(CookieNotification, {
    global: {
      mocks: {
        $ga,
      },
    },
  });

  beforeEach(() => {
    mockedGdprService.acceptGdpr.mockReset();
    mockedGdprService.isGdprAccepted.mockReset();
  });

  it('hides the cookie notification by default', () => {
    mockedGdprService.isGdprAccepted.mockReturnValue(true);
    const wrapper = getWrapper();

    expect(
      wrapper.find('.cookie-notification').exists(),
    ).toBe(false);
  });

  it('displays the cookie notification after is mounted', async () => {
    mockedGdprService.isGdprAccepted.mockReturnValue(false);
    const wrapper = getWrapper();
    await wrapper.vm.$nextTick();
    expect(mockedGdprService.isGdprAccepted).toHaveBeenCalled();
    expect(
      wrapper.find('.cookie-notification').exists(),
    ).toBe(true);
  });

  it('closes the cookie notification after we click OK button', async () => {
    mockedGdprService.isGdprAccepted.mockReturnValue(false);
    const wrapper = getWrapper();

    await wrapper.vm.$nextTick();

    const button = wrapper.find('.cookie-notification__button--ok');

    button.trigger('click');
    await wrapper.vm.$nextTick();

    expect(
      wrapper.find('.cookie-notification').exists(),
    ).toBe(false);
  });

  it('closes the cookie notification after we click NO WAY button', async () => {
    mockedGdprService.isGdprAccepted.mockReturnValue(false);
    const wrapper = getWrapper();

    await wrapper.vm.$nextTick();

    const button = wrapper.find('.cookie-notification__button--no');
    button.trigger('click');

    await wrapper.vm.$nextTick();

    expect(
      wrapper.find('.cookie-notification').exists(),
    ).toBe(false);
  });
})
```

The function `mocked` is actually the one that really matters here. It extends
the type of the injected dependency and allows you to easily work with it. It
took me a lot of time to find this function, but it made my code much cleaner.

This function is actually the main reason for writing this post, since it is
almost necessary for writing unit tests with __typescript__ and __jest__.

## challenges

The challenge I usually find when I write unit tests:

*   Mocking dependency injection
*   Mocking custom events
*   Interacting with `wrapper.vm` object in __typescript__

My quick tips there:

*   Dependencies shall always return functions, so I can mock them
*   Create `mocks.ts` file containing functions for generating necessary mock
    objects
*   When testing component uses other ones, refer to them using `wrapper.findComponent()`
*   I avoid using wrapper.vm and focus in testing DOM elements instead.

