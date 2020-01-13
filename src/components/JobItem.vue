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
      {{ job.position }}
    </h2>

    <div class="job__upper-row">
      <h3 class="job__company">
        {{ job.name }}
      </h3>

      <div class="job__time">
        {{ job.startDate }} -
        <span v-if="job.endDate">
          {{ job.endDate }}
        </span>
        <span v-else>
          today
        </span>
      </div>
    </div>

    <p class="job__description">
      {{ job.description }}
    </p>

    <ul class="job__highlights">
      <li
        v-for="(highlight, index) in job.highlights"
        :key="index"
        class="job__highlight"
      >
        <i class="job__highlight-icon icon-ok" />
        {{ highlight }}
      </li>
    </ul>
  </article>
</template>

<style lang="scss">

@import "../scss/variables";

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

  &__highlight-icon {
    color: $color-rainbow-green;
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
