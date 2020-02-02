<script>
export default {
  name: 'SkillItem',
  props: {
    skill: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="skill">
    <div class="skill__label">
      {{ skill.label }}
    </div>
    <div class="skill__progress">
      <div
        class="skill__progress-bar"
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

.skill {
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
