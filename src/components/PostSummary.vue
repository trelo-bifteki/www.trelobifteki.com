<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component
export default class PostSummary extends Vue {

  @Prop({
    required: true,
    type: Object,
  })
  readonly post: any;

  get formattedDate(): string {
    const date = new Date(this.post.created * 1000);
    return date.toLocaleDateString();
  }

  get link(): string {
    return `/blog/${this.post.id}`;
  }
}
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
      background-color: #F6F4F7;
    }

    &:nth-child(odd) {
      background-color: #FCFAFD;
    }

    &:hover {
      background-color: $color-theme-orange;
      color: $color-theme-white;
    }
  }

</style>
