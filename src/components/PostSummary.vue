<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  defineComponent,
} from 'vue';


export default defineComponent({
  name: 'PostSummary',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedDate(): string {
      const date = new Date(this.post.created * 1000);
      return date.toLocaleDateString();
    },
    link(): string {
      return `/blog/${this.post.id}`;
    },
  },
});

</script>

<template>
  <router-link
    class="post-summary bg-post-background hover:bg-theme-orange
          p-10 text-center transition-colors duration-300 ease-in-out"
    :to="link"
  >
    <div>
      <h2 class="post-summary__title text-rainbow-orange text-3xl pb-4">
        {{ post.title }}
      </h2>
      <h3
        class="text-rainbow-red"
        qa-ref="post-summary__date"
      >
        {{ formattedDate }}
      </h3>
    </div>
  </router-link>
</template>

<style scoped>

  .post-summary:hover .post-summary__title {
    color: var(--color-theme-white);
  }

</style>
