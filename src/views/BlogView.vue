<script>
import { createNamespacedHelpers } from 'vuex';
import PostSummary from '@/components/PostSummary';
import SpinningLoader from '@/components/SpinningLoader';

const { mapState, mapActions } = createNamespacedHelpers('blog');

export default {
  name: 'BlogView',
  metaInfo: {
    title: 'Blog',
  },
  components: {
    PostSummary,
    SpinningLoader,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapState({
      posts: state => state.posts,
    }),
    visiblePosts() {
      return this.posts.filter(post => post.isVisible);
    },
  },
  created() {
    this.isLoading = true;
    this.refreshPosts().finally(() => {
      this.isLoading = false;
    })
  },
  methods: {
    ...mapActions([
      'refreshPosts',
    ]),
  },
};
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
        v-for="(post) in visiblePosts"
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
