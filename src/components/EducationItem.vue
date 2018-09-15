<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  name: 'EducationItem',
};
</script>

<template>
  <article class="education">
    <h2 class="education__title">
      {{ item.title }}
    </h2>
    <div class="education__row">
      <h3 class="education__subtitle">
        {{ item.subtitle }}
      </h3>
      <div class="education__timeline">
        {{ item.time }}
      </div>
    </div>
    <p class="education__description">
      {{ item.description }}
    </p>
  </article>
</template>

<style lang="scss">

@import "../assets/variables.scss";

.education {
  margin-top: $space-xxl;

  &__row {
    color: $color-gray;
    display: flex;
    flex-direction: row;
    margin-bottom: $space;
  }

  &__subtitle {
    flex-grow: 1;
    font-size: $font-size-ml;
  }

  &__timeline {
    font-style: italic;
  }

  &__title {
    color: $color-theme-red;
    font-size: $font-size-l;
    margin-bottom: $space-s;
  }

  &:first-child {
    margin-top: 0;
  }
}
</style>
