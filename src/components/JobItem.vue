<script lang="ts">
import localizedDate from '@/filters/localizedDate.filter';
import {
  ResumeWork,
} from '@/store/cv/types';

import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component({
  filters: {
    localizedDate,
  },
})
export default class JobItem extends Vue {
  @Prop({
    type: Object,
    required: true,
  })
  job!: ResumeWork;
}

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
        {{ job.startDate | localizedDate }}
        &#8212;
        <span v-if="job.endDate">
          {{ job.endDate | localizedDate }}
        </span>
        <span v-else>
          today
        </span>
      </div>
    </div>

    <p
      v-if="job.description"
      class="job__description"
    >
      {{ job.description }}
    </p>

    <p class="job__summary">
      {{ job.summary }}
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
@import "../scss/breakpoints";

.job {
  margin-bottom: $space-xl;

  &:last-child {
    margin-bottom: 0;
  }

  &__company {
    font-size: $font-size-ml;
    margin-bottom: $space-s;

    @include media-breakpoint-not-small {
      flex-grow: 1;
      margin-bottom: 0;
    }
  }

  &__description {
    font-style: italic;
    margin-bottom: $space;
  }

  &__highlight {
    display: flex;
  }

  &__highlight-icon {
    color: $color-rainbow-green;
  }

  &__summary {
    padding-bottom: $space;
  }

  &__time {
    font-style: italic;

    @include media-breakpoint-not-small {
      margin-left: $space-l;
    }
  }

  &__title {
    color: $color-theme-red;
    font-size: $font-size-l;
    margin-bottom: $space-l;
  }

  &__upper-row {
    color: $color-gray;
    margin-bottom: $space;

    @include media-breakpoint-not-small {
      align-items: center;
      display: flex;
    }
  }
}

</style>
