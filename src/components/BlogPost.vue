<script>
import Prism from 'prismjs';
import 'prismjs/components/prism-java.min.js'

export default {
  name: 'BlogPost',
  data() {
    return {
      content: '',
      isContentLoaded: false,
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
  },
  created() {
    const selectedPostId = this.$route.params.id;
    const loader = import(`html-loader!../assets/posts/${selectedPostId}.md`);
    this.$store.commit('updateSelectedPostId', selectedPostId);
    this.$store.dispatch('refreshPosts');
    loader.then(module => {
      this.content = module.default;
      this.isContentLoaded = true;
    });
  },
  updated() {
    if (this.isContentLoaded) {
      Prism.highlightAll();
      this.isContentLoaded = false;
    }
  },
};
</script>

<template>
  <article class="blog-post">
    <h1 class="blog-post__title">{{ post.title }}</h1>
    <h2 class="blog-post__created">{{ formattedDate }}</h2>
    <section
      v-html="content"
      class="blog-post__content blog-content"
    ></section>
  </article>
</template>

<style lang="scss">

@import '~prismjs/themes/prism-okaidia';
@import "../assets/variables";

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
