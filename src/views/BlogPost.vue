<script lang="ts">

import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

import {
  namespace,
} from 'vuex-class';

const blog = namespace('blog');

import BlogContent from '@/components/BlogContent.vue';
import Prism from 'prismjs';
import 'prismjs/components/prism-java.min.js';
import 'prismjs/components/prism-typescript.min.js';
import SpinningLoader from '@/components/SpinningLoader.vue';
import {
  BlogPost as BlogPostType, createEmptyBlogPost,
} from '@/store/blog/types';

@Component({
  name: 'BlogPost',
  components: {
    BlogContent,
    SpinningLoader,
  },
})
export default class BlogPost extends Vue {

  @Prop({
    required: true,
    type: String,
  })
  readonly postId!: string;

  @blog.State('posts')
  readonly posts!: ReadonlyArray<BlogPostType>;

  @blog.Action('refreshPosts')
  readonly refreshPosts!: () => void;

  @blog.Mutation('updateSelectedPostId')
  readonly updateSelectedPostId!: (x: string) => void;

  content!: string;
  isContentLoaded = false;
  isLoading = false;

  get post(): BlogPostType {
    const selectedPosts = this.posts.filter(post => post.id === this.postId);
    return selectedPosts.length
      ? selectedPosts[0]
      : createEmptyBlogPost();
  }

  get formattedDate(): string {
    const date = new Date(this.post.created * 1000);

    return date.toLocaleDateString();
  }

  async created(): Promise<void> {
    const loader = import(/* webpackChunkName: "post" */ `html-loader!@/assets/posts/${this.postId}.md`);

    this.updateSelectedPostId(this.postId);

    this.isLoading = true;
    try {
      await this.refreshPosts();
      const module = await loader;
      this.content = module.default;
      this.isContentLoaded = true;
    } catch (error) {
      this.content = 'Unable to find post';
      throw error;
    } finally {
      this.isLoading = false;
    }
  }

  updated(): void {
    if (this.isContentLoaded) {
      Prism.highlightAll();
      this.isContentLoaded = false;
    }
  }

}

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
    <div class="blog-post__created">
      {{ formattedDate }}
    </div>
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
    font-size: $h4-font-size;
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
