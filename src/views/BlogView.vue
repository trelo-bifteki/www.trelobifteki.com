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
      v-if="!isLoading"
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
