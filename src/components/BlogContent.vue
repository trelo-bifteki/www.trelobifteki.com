<script>
export default {
  name: 'BlogContent',
  props: {
    content: {
      type: String,
      default: '',
    },
  },
}
</script>
<template>
  <!-- eslint-disable vue/no-v-html -->
  <section
    class="blog-content"
    v-html="content"
  />
  <!-- eslint-enable vue/no-v-html -->
</template>
<style lang="scss">
  @import "../scss/variables";

  .blog-content {
    margin-bottom: 5rem;

    h2 {
      color: $color-theme-red;
    }

    h3 {
      color: $color-theme-lila;
    }

    p {
      margin-bottom: 1rem;
    }

    ul {
      list-style-type: disc;
      margin-bottom: $space-l;
    }

    li {
      margin: $space-s $space-l;
    }

    pre[class*="language-"] {
      font-family: $font-family-monospace;
      margin: $space 0;
    }
  }
</style>
