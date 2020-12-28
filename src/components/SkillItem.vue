<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

import {
  Skill,
} from '@/models/resume';

@Component
export default class SkillItem extends Vue {

  @Prop({
    required: true,
    type: Object,
  })
  readonly skill!: Skill;

  get label(): string {
    return this.skill.label;
  }
}

</script>

<template>
  <div class="skill-item">
    <div
      class="skill-item__label"
      qa-ref="skill-item__label"
    >
      {{ skill.label }}
    </div>
    <div class="skill-item__progress">
      <div
        class="skill-item__progress-bar"
        qa-ref="skill-item__progress-bar"
        role="progressbar"
        :aria-valuenow="skill.level"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{ width: skill.level + '%' }"
      />
    </div>
  </div>
</template>

<style lang="scss">

@import "../scss/variables";
@import "../scss/breakpoints";

.skill-item {
  display: flex;
  flex-direction: row;
  margin: $space 0;

  &__label {
    margin-right: $space;
    min-width: 20rem;
  }

  &__progress {
    background-color: $color-theme-white;
    border-radius: .25rem;
    display: flex;
    flex-grow: 1;
    font-size: .75rem;
    height: 1rem;
    overflow: hidden;
  }

  &__progress-bar {
    background-color: $color-theme-orange;
    color: $color-theme-white;
    display: flex;
    justify-content: center;
  }

  @include media-breakpoint-medium {
    flex-direction: column;
  }
}
</style>
