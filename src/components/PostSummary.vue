<script>
export default {
  name: 'PostSummary',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedDate() {
      const date = new Date(this.post.created * 1000);

      return date.toLocaleDateString();
    },
    link() {
      return `/blog/${this.post.id}`;
    },
  },
};
</script>

<template>
  <router-link
    class="post-summary"
    :to="link"
  >
    <div>
      <h2 class="post-summary__title">
        {{ post.title }}
      </h2>
      <h3 class="post-summary__date">
        {{ formattedDate }}
      </h3>
    </div>
  </router-link>
</template>

<style lang="scss">
  @import "../scss/variables";
  @import "../scss/breakpoints";

  .post-summary {
    $root: &;

    background-color: $color-theme-orange;
    color: #333;
    padding: 5rem 3rem;
    text-align: center;
    transition: background-color .33s ease;
    width: 50%;

    @include media-breakpoint-medium {
        width: 100%;
    }

    &__title {
      color: $color-theme-lila;
      font-size: $font-size-xl;
      padding-bottom: $space;

      @at-root #{$root}:hover & {
        color: $color-theme-white;
      }
    }

    &__date {
      color: $color-theme-red;
    }

    &:nth-child(even) {
      background-color: #f6f4f7;
    }

    &:nth-child(odd) {
      background-color: #fcfafd;
    }

    &:hover {
      background-color: $color-theme-orange;
      color: $color-theme-white;
    }
  }

</style>
