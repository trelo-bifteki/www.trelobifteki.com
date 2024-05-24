<script lang="ts">
import {
  defineComponent,
} from 'vue';


export default defineComponent({
  name: 'BlogContent',
  props: {
    content: {
      type: String,
      default: '',
    },
  },
});
</script>
<template>
  <!-- eslint-disable vue/no-v-html -->
  <section
    class="blog-content text-normal mb-6"
    v-html="content"
  />
  <!-- eslint-enable vue/no-v-html -->
</template>
<style>

  .blog-content em {
    font-style: italic;
  }

  .blog-content h2 {
    color: var(--color-theme-red);
    margin: 1.5rem 0;
  }

  .blog-content h3 {
    color: var(--color-theme-lila);
    margin: 1rem 0;
  }

  .blog-content p {
    margin-bottom: var(--space);
    overflow-wrap: break-word;
  }

  .blog-content code {
    color: var(--color-theme-red);
    font-size: 87.5%;
    word-break: break-word;
  }

  .blog-content pre {
    margin: var(--space) 0;
  }

  .blog-content pre > code {
    font-family: monospace;
  }

  .blog-content img {
    display: block;
    margin: 0 auto;
    max-width: 80%;
    text-align: center;
  }

  .blog-content strong {
    font-weight: bold;
  }

  .blog-content ul {
    list-style-type: disc;
    margin-bottom: var(--space-l);
  }

  .blog-content li {
    margin: var(--space-s) var(--space-l);
  }

  .blog-content pre[class*="language-"] {
    font-family: monospace;
    margin: var(--space) 0;
  }
</style>
