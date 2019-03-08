<script>
import PostSummary from './PostSummary';
import SpinningLoader from './SpinningLoader';

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
    posts() {
      return this.$store.state.BlogStore.posts;
    },
    visiblePosts() {
      return this.posts.filter(post => post.isVisible);
    }
  },
  created() {
    this.isLoading = true;
    this.$store.dispatch('refreshPosts')
      .finally(() => {
        this.isLoading = false;
      });
  },
};
</script>

<template>
  <div class="blog-view">
    <h1 class="blog-view__headline">
      <i class="icon-heart"></i>
      Blog
    </h1>
    <div
      class="blog-view__spinner"
      v-if="isLoading"
    >
      <SpinningLoader />
    </div>
    <section
      class="blog-view__container"
      v-if="!isLoading"
    >
      <PostSummary
        class="blog-view__post"
        v-for="(post) in visiblePosts"
        v-bind:post="post"
        v-bind:key="post.id"
      ></PostSummary>
    </section>
  </div>
</template>

<style lang="scss">

@import "../assets/variables.scss";

.blog-view {
  margin-left: auto;
  margin-right: auto;
  max-width: 1310px;
  padding: 0 15px;

  &__headline {
    color: $color-theme-orange;
    font-size: $font-size-xxl;
    padding: $space-l 0;
  }

  &__post {
    font-size: 1.3rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 80rem;
    padding-bottom: 5rem;
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
