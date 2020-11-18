<script>
import {
  createNamespacedHelpers,
} from 'vuex';
import BlogContent from '@/components/BlogContent';
import Prism from 'prismjs';
import 'prismjs/components/prism-java.min.js';
import 'prismjs/components/prism-typescript.min.js';
import SpinningLoader from '@/components/SpinningLoader';

const {
  mapActions,
  mapMutations,
  mapState,
} = createNamespacedHelpers('blog');

export default {
  name: 'BlogPost',
  metaInfo() {
    const title = this.post.title
    const meta = [{
      name: 'description',
      value: this.post.description,
    }]
    return {
      title,
      meta,
    };
  },
  components: {
    BlogContent,
    SpinningLoader,
  },
  props: {
    postId: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      content: '',
      isContentLoaded: false,
      isLoading: false,
    };
  },
  computed: {
    ...mapState({
      posts: state => state.posts,
    }),
    post() {
      const selectedPosts = this.posts.filter(post => post.id === this.postId);

      return selectedPosts.length
        ? selectedPosts[0]
        : {
        };
    },
    formattedDate() {
      const date = new Date(this.post.created * 1000);

      return date.toLocaleDateString();
    },
  },
  async created() {
    const loader = import(/* webpackChunkName: "post" */ `html-loader!@/assets/posts/${this.postId}.md`);

    this.updateSelectedPostId(this.postId);

    this.isLoading = true;
    await this.refreshPosts();
    try {
      const module = await loader;
      this.content = module.default;
      this.isContentLoaded = true;
    } catch (error) {
      this.content = 'Unable to find post';
      throw error;
    } finally {
      this.isLoading = false;
    }
  },
  updated() {
    if (this.isContentLoaded) {
      Prism.highlightAll();
      this.isContentLoaded = false;
    }
  },
  methods: {
    ...mapActions([
      'refreshPosts',
    ]),
    ...mapMutations([
      'updateSelectedPostId',
    ]),
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
