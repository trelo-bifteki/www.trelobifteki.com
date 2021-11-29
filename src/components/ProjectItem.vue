<script lang="ts">
import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'ProjectItem',
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
    <div
      class="project-item__title"
      qa-ref="project-item__title"
    >
      {{ project.title }}
    </div>
    <div class="project-item__duration">
      2019 &#8212; 2020
    </div>
    <div class="project-item__properties">
      <div class="project-item__label">
        Customer
      </div>
      <div class="project-item__value">
        {{ project.customer }}
      </div>
      <div class="project-item__label">
        Description
      </div>
      <div class="project-item__value">
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
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "../scss/variables";
@import "../scss/typography";

.project-item {
  position: relative;

  &__duration {
    color: orchid;
    padding-left: $space-l
  }

  &__properties {
    display: grid;
    grid-template-columns: auto 1fr;
    padding-left: $space;
  }

  &__title {
    @include headline;
    color: $color-rainbow-orange;
    font-size: 130%;
    font-weight: 300;
    padding-left: $space-l;
    position: relative;

    &::after {
      background-color: $color-rainbow-orange;
      border: 3px solid white;
      border-radius: 50%;
      content: "";
      height: 1.2rem;
      left: 1px;
      position: absolute;
      top: 6px;
      width: 1.2rem;
      z-index: 2;
    }
  }

  &__label {
    color: $color-rainbow-red;
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
