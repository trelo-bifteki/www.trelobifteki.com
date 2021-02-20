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

A _stateless_ component is the one that does not include any bindings/ states
from Vuex or other resources. Inputs and outputs are only defined as
_properties_ and _events_ respectively.

Let's assume we have the following small component:

```vue
<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component
export default class IconBase extends Vue {
  @Prop({
    type: [ String, Number ],
    default: '16px',
  })
  width!: string | number;

  @Prop({
    type: [ String, Number ],
    default: '16px',
  })
  height!: string | number;

  @Prop({
    type: String,
    default: 'default',
  })
  iconColor!: string;

  @Prop({
    type: Boolean,
    default: false,
  })
  inverted!: boolean;

  get iconGroupClasses(): string[] {
    return [
      'icon-base__group',
      `icon-base__group--${this.iconColor}`,
    ];
  }

  get rootClasses(): string [] {
    const classes = [ 'icon-base' ];
    if (this.inverted) {
      classes.push('icon-base--inverted');
    }

    return classes;
  }
}
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
import IconBase from '@/components/icons/IconBase.vue';
import {
  shallowMount, Wrapper,
} from '@vue/test-utils';

const defaultProps = {
  iconName: 'testName',
  width: '20px',
  iconColor: 'default',
  inverted: false,
};

describe('IconBase', () => {
  const createWrapper = (propsData= defaultProps): Wrapper<IconBase> => shallowMount(IconBase, {
    propsData,
  });

  it('loads succesfully', () => {
    const wrapper = createWrapper();

    expect(
      wrapper.find('.icon-base').exists(),
    ).toBe(true);
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

It took me a long research and experiments to find `Wrapper<Component>` as
return trype for `createWrapper` function. I also introduce the `defaultProps`
in order to have autocompletion, avoid DRY and type checking.

## Recipe for stateful components

A stateful component is a component in my applications and it uses _Vuex_ as
input and output.

Taking the example below:

```vue
<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';

import PostSummary from '@/components/PostSummary.vue';
import SpinningLoader from '@/components/SpinningLoader.vue';

import {
  namespace,
} from 'vuex-class';
import {
  BlogPost,
} from '@/store/blog/types';

const blog = namespace('blog');

@Component({
  name: 'BlogView',
  metaInfo: {
    title: 'Blog',
  },
  components: {
    PostSummary,
    SpinningLoader,
  },
})
export default class BlogView extends Vue {

  @blog.State('posts')
  readonly posts!: ReadonlyArray<BlogPost>;

  @blog.Action('refreshPosts')
  readonly refreshPosts!: () => Promise<ReadonlyArray<BlogPost>>;

  isLoading = false;

  get visiblePostsOrderByDateDesc(): ReadonlyArray<BlogPost> {
    const visiblePosts = this.posts.filter(post => post.isVisible);
    visiblePosts.sort((one, another) => another.created - one.created);
    return visiblePosts;
  }

  async created(): Promise<void> {
    this.isLoading = true;
    try {
      await this.refreshPosts();
    } finally {
      this.isLoading = false;
    }
  }
}
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
