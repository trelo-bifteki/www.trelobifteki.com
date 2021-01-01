<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component
export default class BlogContent extends Vue {

  @Prop({
    type: String,
    default: '',
  })
  content!: string;
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
  @import "../scss/breakpoints";

  .blog-content {
    font-size: 1.1rem;
    margin-bottom: 5rem;

    em {
      font-style: italic;
    }

    h2 {
      color: $color-theme-red;
      margin: 3rem 0 1.5rem;
    }

    h3 {
      color: $color-theme-lila;
      margin: 2.5rem 0 1.3rem;
    }

    p {
      margin-bottom: 1rem;
      overflow-wrap: word-break;

      > code {
        color: $color-theme-red;
        font-size: 87.5%;
        word-break: break-word;
      }

      @include media-breakpoint-not-small {
        margin-bottom: 1.1rem;
      }
    }

    pre {
      margin: $space-l 0;

      > code {
        font-family: $font-family-monospace;
      }
    }

    img {
      display: block;
      margin: 0 auto;
      max-width: 80%;
      text-align: center;
    }

    strong {
      font-weight: bold;
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
