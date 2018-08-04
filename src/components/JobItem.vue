<script>
export default {
  name: 'JobItem',
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <article class="job">
    <h2 class="job__title">
      {{ job.title }}
    </h2>

    <div class="job__upper-row">
      <h3 class="job__company">
        {{ job.company }}
      </h3>

      <div class="job__time">
        {{ job.time }}
      </div>
    </div>

    <p class="job__description">
      {{ job.description }}
    </p>

    <p class="job__points">
      {{ job.points }}
    </p>
  </article>
</template>

<style>

@import '../assets/common.css';

.job {
  margin-bottom: 3rem;
}

.job:last-child {
  margin-bottom: 0;
}

.job__company {
  font-size: 110%;
  flex-grow: 1;
}

.job__description {
  margin: var(--space) 0;
}

.job__time {
  font-style: italic;
}

.job__title {
  font-size: 120%;
  margin-bottom: var(--space-s);
}

.job__upper-row {
  display: flex;

  color: var(--color-gray);
}
</style>
