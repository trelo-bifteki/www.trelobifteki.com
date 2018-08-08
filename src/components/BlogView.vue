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
    <h1>
      <i class="icon-heart"></i>
      Blog
    </h1>
    <section>
      <PostSummary
        v-for="(post) in posts"
        v-bind:post="post"
        v-bind:key="post.id"
      ></PostSummary>
    </section>
  </div>
</template>

<style scoped>

a {
  text-decoration: none;
}

div {
  font-size: 1.3rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
  padding-bottom: 5rem;
}

h1 {
  font-size: var(--font-size-xxl);
  padding: var(--space-l) var(--space);
}

section {
  display: flex;
  flex-wrap: wrap;
}

</style>
