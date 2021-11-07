<script lang="ts">
import Vue from 'vue';
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


export default Vue.extend({
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
