<script lang="ts">
import {
  defineComponent,
} from 'vue';

import DurationLabel from '@/components/DurationLabel.vue';

export default defineComponent({
  name: 'ProjectItem',
  components: {
    DurationLabel,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
})
</script>
<template>
  <div
    class="project-item"
    qa-ref="project-item"
  >
    <div class="project-item__properties">
      <div class="project-item__duration">
        <duration-label
          :start="project.startDate"
          :end="project.endDate"
        />
      </div>
      <div
        class="project-item__title"
        qa-ref="project-item__title"
      >
        {{ project.title }}
      </div>
      <div class="project-item__label">
        Customer
      </div>
      <div
        class="project-item__value"
        qa-ref="project-item__customer"
      >
        {{ project.customer }}
      </div>
      <div class="project-item__label">
        Description
      </div>
      <div
        class="project-item__value"
        qa-ref="project-item__description"
      >
        {{ project.description }}
      </div>
      <div class="project-item__label">
        Position
      </div>
      <div class="project-item__value">
        {{ project.position }}
      </div>
      <div class="project-item__label">
        Tasks
      </div>
      <div class="project-item__value">
        <ul>
          <li
            v-for="skill in project.tasks"
            :key="skill"
          >
            <span class="project-item__bullet">
              &dash;&nbsp;
            </span>
            {{ skill }}
          </li>
        </ul>
      </div>
      <div class="project-item__label">
        Technologies
      </div>
      <div class="project-item__value">
        <div class="project-item__technologies">
          <div
            v-for="technology in project.technologies"
            :key="technology"
            class="project-item__technology"
          >
            <span class="project-item__bullet">
              &dash;&nbsp;
            </span>
            {{ technology }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../scss/variables";
@import "../scss/typography";
@import "../scss/breakpoints";

.project-item {
  position: relative;

  &__bullet {
    color: $color-rainbow-blue
  }

  &__duration {
    align-items: center;
    color: $color-rainbow-red;
    display: flex;
    font-weight: bold;
    padding: $space;
    position: relative;

    &::after {
      background-color: $color-rainbow-orange;
      border: 3px solid white;
      border-radius: 50%;
      content: "";
      height: 1.2rem;
      left: -15px;
      position: absolute;
      top: 30%;
      width: 1.2rem;
      z-index: 2;
    }
  }

  &__properties {
    display: grid;
    grid-template-columns: 1fr;
    padding-left: $space;

    @include media-breakpoint-not-small {
      grid-template-columns: auto 1fr;
    }
  }

  &__technologies {
    display: flex;
    flex-direction: column;
    @include media-breakpoint-not-small {
      flex-direction: row;
      flex-wrap: wrap;
    }
    max-width: 40rem;
  }

  &__technology {
    padding-right: $space-s;
  }

  &__title {
    align-items: center;
    color: $color-rainbow-orange;
    display: flex;
    font-size: 130%;
    font-weight: 300;
    padding: $space-s $space;
  }

  &__label {
    color: $color-rainbow-lila;
    padding: $space-s $space;
  }

  &__value {
    padding: $space-s $space;
  }

  &::after {
    border-left: 5px solid $color-rainbow-orange;
    bottom: 0;
    content: "";
    left: $space-s;
    position: absolute;
    top: 0;
    width: 1rem;
    z-index: 1;
  }
}
</style>
