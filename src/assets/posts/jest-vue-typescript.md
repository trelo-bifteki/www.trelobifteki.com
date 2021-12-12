In this tutorial we are going to create freshly hand-made unit tests using the
following ingredients:

*   Vue.js
*   eslint
*   Jest
*   Typescript
*   Vuex

I am writing this guide because it is hard to find good full examples on the
internet using all technologies mentioned above together. I will also mention
all parts where it took me the most time to find a solution.

I will also use real examples from the code I developed for my own website.

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

<style lang="scss">
@import '../../scss/variables';

.icon-base {
  display: inline-block;
  transform: rotate(0deg);
  transition: transform .33s ease-out;
  vertical-align: baseline;

  &__group {
    fill: currentColor;

    &--orange {
      fill: $color-theme-orange;
    }

    &--red {
      fill: $color-theme-red;
    }
  }

  &--inverted {
    transform: rotate(180deg);
  }
}
</style>
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

<style lang="scss">

@import "../scss/variables.scss";
@import "../scss/fluid";
@import "../scss/typography";
@import "../scss/breakpoints";

.blog-view {
  @include body-container;

  &__headline {
    @include headline;

    color: $color-theme-orange;
    font-size: $font-size-xxl;
  }

  &__post {
    font-size: 1.3rem;
    margin-left: auto;
    margin-right: auto;
    text-decoration: none;
    width: 100%;

    @include media-breakpoint-not-small {
      width: 50%;

      &:last-child:nth-child(odd) {
        width: 100%;
      }
    }
  }

  &__spinner {
    align-items: center;
    display: flex;
    flex-direction: column;
    min-height: 10rem;
    text-align: center;
  }

  &__container {
    display: flex;
    flex-wrap: wrap;
    padding: $space-xl 0;
  }
}

</style>
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
