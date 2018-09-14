<script>

export default {
  name: 'BlogPost',
  data() {
    return {
    };
  },
  computed: {
    post() {
      const selectedPostId = this.$route.params.id;
      const posts = this.$store.state.BlogStore.posts;
      const selectedPosts = posts.filter(post => post.id === selectedPostId);

      return selectedPosts.length
        ? selectedPosts[0]
        : {};
    },
    formattedDate() {
      const date = new Date(this.post.created * 1000);

      return date.toLocaleDateString();
    },
    postContent() {
      return this.$store.state.BlogStore.postContent;
    },
  },
  mounted() {
    const selectedPostId = this.$route.params.id;
    this.$store.commit('updateSelectedPostId', selectedPostId);
    this.$store.dispatch('refreshPosts');
    this.$store.dispatch('refreshPostContent');
  },
};
</script>

<template>
  <article class="blog-post">
    <h1 class="blog-post__title">{{ post.title }}</h1>
    <h2 class="blog-post__created">{{ formattedDate }}</h2>
    <section
      v-html="postContent"
      class="blog-post__content blog-content"
    ></section>
  </article>
</template>

<style lang="scss">

@import "../assets/variables.scss";

.blog-post {
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1310px;

  &__title {
    font-size: $font-size-xxl;
    margin: $space 0;
    color: $color-theme-orange;
  }

  &__created {
    font-size: $font-size-xl;
    margin: $space 0;
    color: $color-theme-gray;
  }
}

</style>
