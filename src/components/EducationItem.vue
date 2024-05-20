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
  <article class="text-base m-0">
    <h2
      qa-ref="education__title"
      class="text-red-800 text-xl mb-4"
    >
      {{ item.institution }}
    </h2>
    <div class="flex flex-col sm:flex-row mb-4">
      <h3
        qa-ref="education__subtitle"
        class="text-base flex-grow"
      >
        {{ item.area }}
      </h3>

      <div class="italic">
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
