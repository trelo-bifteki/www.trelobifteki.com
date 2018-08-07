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
      <router-link
        class="article"
        v-for="(post) in posts"
        v-bind:key="post.id"
        to="blog"
      >
        <PostSummary v-bind:post="post"></PostSummary>
      </router-link>
    </section>
  </div>
</template>

<style scoped>

a {
  text-decoration: none;
}

div {
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
}

h1 {
  font-size: var(--font-size-xxl);
  padding: var(--space-l) var(--space);
}

section {
  display: flex;
  flex-wrap: wrap;
}

.article {
  background-color: var(--color-theme-orange);
  color: #333;
  padding: 5rem 3rem;
  text-align: center;
  width: 50%;
}

.article:first-child {
  background-color: #f6f4f7;
}

.article:nth-child(2) {
  background-color: #fcfafd;
}

.article:nth-child(3) {
  background-color: #f2f0f3;
}

@media screen and (width <= 768px) {
  .article {
    width: 100%;
  }
}

</style>
