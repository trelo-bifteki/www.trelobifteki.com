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

<style>

.education {
  margin-top:  var(--space-xxl);
}

.education__row {
  color: var(--color-gray);
  display: flex;
  flex-direction: row;
  margin-bottom: var(--space);
}

.education__subtitle {
  flex-grow: 1;
  font-size: var(--font-size-ml);
}

.education__timeline {
  font-style: italic;
}

.education__title {
  color: var(--color-theme-red);
  font-size: var(--font-size-l);
  margin-bottom: var(--space-s);
}

.education:first-child {
  margin-top: 0;
}

</style>
