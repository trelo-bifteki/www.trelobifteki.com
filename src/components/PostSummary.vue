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
  },
};
</script>

<template>
  <div>
    <h3>
      {{ formattedDate }}
    </h3>
    <h2>
      {{ post.title }}
    </h2>
  </div>
</template>

<style scoped>

h2 {
  font-size: var(--font-size-xl);
}

</style>
