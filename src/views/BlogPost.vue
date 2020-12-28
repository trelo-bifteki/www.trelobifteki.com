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
  readonly posts!: any[];

  @blog.Action('refreshPosts')
  readonly refreshPosts!: () => void;

  @blog.Mutation('updateSelectedPostId')
  readonly updateSelectedPostId!: (x: any) => void;

  content!: string;
  isContentLoaded = false;
  isLoading = false;

  get post(): any {
    const selectedPosts = this.posts.filter(post => post.id === this.postId);
    return selectedPosts.length
      ? selectedPosts[0]
      : {
      };
  }

  get formattedDate(): string {
    const date = new Date(this.post.created * 1000);

    return date.toLocaleDateString();
  }

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
