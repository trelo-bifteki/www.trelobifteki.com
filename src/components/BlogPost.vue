<script>
import BlogContent from './BlogContent';
import Prism from 'prismjs';
import 'prismjs/components/prism-java.min.js';
import SpinningLoader from './SpinningLoader';

export default {
  name: 'BlogPost',
  components: {
    BlogContent,
    SpinningLoader,
  },
  data() {
    return {
      content: '',
      isContentLoaded: false,
      isLoading: false,
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
    this.isLoading = true;
    loader.then(module => {
      this.content = module.default;
      this.isContentLoaded = true;
    }).catch(() => {
      this.content = 'Unable to find post';
    }).finally(() => {
      this.isLoading = false;
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
  <div
    v-if="isLoading"
    class="blog-post blog-post--loading"
  >
    <SpinningLoader />
  </div>
  <article
    v-else
    class="blog-post"
  >
    <h1 class="blog-post__title">
      {{ post.title }}
    </h1>
    <h2 class="blog-post__created">
      {{ formattedDate }}
    </h2>
    <BlogContent
      class="blog-post__content"
      :content="content"
    />
  </article>
</template>

<style lang="scss">

@import '~prismjs/themes/prism-okaidia';
@import "../scss/variables";
@import "../scss/fluid";

.blog-post {
  @include body-container;

  padding: $space-l $body-container-padding;

  &__title {
    color: $color-theme-orange;
  }

  &__created {
    color: $color-theme-gray;
  }

  &--loading {
    align-items: center;
    display: flex;
    flex-direction: column;
    min-height: 30rem;
    text-align: center;
  }
}

</style>
