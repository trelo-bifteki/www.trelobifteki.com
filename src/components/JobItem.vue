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

<style lang="scss">

@import "../assets/variables.scss";

.job {
  margin-bottom: $space-xl;

  &:last-child {
    margin-bottom: 0;
  }

  &__company {
    font-size: $font-size-ml;
    flex-grow: 1;
    margin-bottom: $space;
  }

  &__description {
    margin-bottom: $space;
  }

  &__time {
    font-style: italic;
  }

  &__title {
    color: $color-theme-red;
    font-size: $font-size-l;
    margin-bottom: $space;
  }

  &__upper-row {
    display: flex;
    color: $color-gray;
  }
}

</style>
