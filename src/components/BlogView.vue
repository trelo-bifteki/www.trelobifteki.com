<script>
import PostSummary from './PostSummary';

export default {
  name: 'BlogView',
  components: {
    PostSummary,
  },
  computed: {
    posts() {
      return this.$store.state.BlogStore.posts;
    },
  },
  mounted() {
    this.$store.dispatch('refreshPosts');
  },
};
</script>

<template>
  <div class="blog-view">
    <h1 class="blog-view__headline">
      <i class="icon-heart"></i>
      Blog
    </h1>
    <section class="blog-view__container">
      <PostSummary
        class="blog-view__post"
        v-for="(post) in posts"
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

  &__container {
    display: flex;
    flex-wrap: wrap;
    padding-top: 2rem;
  }
}

</style>
