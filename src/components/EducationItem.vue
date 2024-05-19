<script lang="ts">
import {
  defineComponent,
} from 'vue';


import localizedDate from '@/filters/localizedDate.filter';

export default defineComponent({
  name: 'EducationItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    localizedDate,
  },
});
</script>

<template>
  <article class="education">
    <h2 class="education__title">
      {{ item.institution }}
    </h2>
    <div class="education__row">
      <h3 class="education__subtitle">
        {{ item.area }}
      </h3>

      <div class="education__timeline">
        <span qa-ref="education-item-start">
          {{ localizedDate(item.startDate) }}
        </span>
        &#8212;
        <span qa-ref="education-item-end">
          {{ localizedDate(item.endDate) }}
        </span>
      </div>
    </div>
    <p class="education__description">
      {{ item.studyType }}
    </p>
  </article>
</template>

<style>

.education {
  margin-top: 0;
}

.education__row {
  color: var(--color-gray);
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space);
}

.education__subtitle {
  flex-grow: 1;
  font-size: var(--font-size-ml);
  margin-bottom: var(--space-s);
}

.education__timeline {
  font-style: italic;
}

.education__title {
  color: var(--color-theme-red);
  font-size: var(--font-size-l);
  margin-bottom: var(--space-s);
}

.education__title:first-child {
  margin-top: 0;
}

@media (min-width: 576px) {
  .education__row {
    flex-direction: row;
  }

  .education__subtitle {
    margin-bottom: 0;
  }
}

</style>
