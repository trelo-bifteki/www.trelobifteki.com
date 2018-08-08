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
      return `blog/${this.post.id}`;
    },
  },
};
</script>

<template>
  <router-link class="article" :to="link">
    <div>
      <h2>
        {{ post.title }}
      </h2>
      <h3>
        {{ formattedDate }}
      </h3>
    </div>
  </router-link>
</template>

<style scoped>

h2 {
  color: var(--color-theme-lila);
  font-size: var(--font-size-xl);
  padding-bottom: 1rem;
}

h3 {
  color: var(--color-theme-red);
}

.article {
  background-color: var(--color-theme-orange);
  color: #333;
  padding: 5rem 3rem;
  text-align: center;
  transition: background-color .33s ease;
  width: 50%;
}

.article:first-child {
  background-color: #f6f4f7;
}

.article:nth-child(2) {
  background-color: #fcfafd;
}

.article:nth-child(3) {
  background-color: #f2f0f3;
}

.article:hover {
  background-color: var(--color-theme-orange);
}

.article:hover h3 {
  color: var(--color-theme-white);
}

@media screen and (width <= 768px) {
  .article {
    width: 100%;
  }
}

</style>
