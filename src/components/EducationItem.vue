<script lang="ts">
import Vue from 'vue';

import localizedDate from '@/filters/localizedDate.filter';

export default Vue.extend({
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

<style lang="scss">

@import "../scss/variables.scss";
@import "../scss/breakpoints.scss";

.education {
  margin-top: $space-xxl;

  &__row {
    color: $color-gray;
    display: flex;
    flex-direction: column;
    margin-bottom: $space;

    @include media-breakpoint-not-small {
      flex-direction: row;
    }
  }

  &__subtitle {
    flex-grow: 1;
    font-size: $font-size-ml;
    margin-bottom: $space-s;

    @include media-breakpoint-not-small {
      margin-bottom: 0;
    }
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
