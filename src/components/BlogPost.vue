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
    postContent() {
      return this.$store.state.BlogStore.postContent;
    },
  },
  mounted() {
    this.$store.dispatch('refreshPosts').then(() => {
      const id = this.$route.params.id;
      this.post = this.$store.getters.getById(id);
      this.$store.commit('updatePost', this.post);
      this.$store.dispatch('refreshPostContent');
    });
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
