<script>

export default {
  name: 'BlogPost',
  data() {
    return {
      post: {
        title: 'Unknown post',
        created: 0,
      },
    };
  },
  computed: {
    formattedDate() {
      const date = new Date(this.post.created * 1000);

      return date.toLocaleDateString();
    },
  },
  mounted() {
    this.$store.dispatch('refreshPosts').then(() => {
      const id = this.$route.params.id;
      this.post = this.$store.getters.getById(id);
    });
  },
};
</script>

<template>
  <article>
    <h1>{{ post.title }}</h1>
    <h2>{{ formattedDate }}</h2>
  </article>
</template>

<style scoped>

article {
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
}

h1 {
  font-size: var(--font-size-xxl);
  margin: var(--space);
  color: var(--color-theme-orange);
}

h2 {
  font-size: var(--font-size-l);
  margin: var(--space);
  color: var(--color-theme-gray);
}
</style>
