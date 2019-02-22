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
  <section
    class="blog-content"
    v-html="content"
  />
</template>
<style lang="scss">
  @import "../scss/variables";

  .blog-content {

    & h2 {
      font-size: 120%;
      color: var(--color-theme-red);
      margin: var(--space-xl) 0;
    }
    & p {
      margin-top: 1rem;
    }
  }
</style>
