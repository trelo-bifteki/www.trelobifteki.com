<script>
export default {
  name: 'BlogView',
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
    <h1>Blog</h1>
    <section>
      <article
        v-for="(post) in posts"
        v-bind:key="post.id"
      >
        <h2>{{ post.title }}</h2>
      </article>
    </section>
  </div>
</template>

<style scoped>

div {
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
}

h1 {
  font-size: var(--font-size-xxl);
  padding: var(--space-l) 0;
}

h2 {
  font-size: var(--font-size-xl);
}

section {
  display: flex;
  flex-wrap: wrap;
  margin: 3rem 0;
}

article {
  background-color: var(--color-theme-orange);
  color: #333;
  padding: 5rem 3rem;
  text-align: center;
  width: 50%;
}

article:first-child {
  background-color: #f6f4f7;
}

article:nth-child(2) {
  background-color: #fcfafd;
}

article:nth-child(3) {
  background-color: #f2f0f3;
}

</style>
