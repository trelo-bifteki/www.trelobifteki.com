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
      ></div>
    </div>
  </div>
</template>

<style>

.skill {
  display: flex;
  flex-direction: row;
  margin: var(--space) 0;
}

.skill__label {
  min-width: 20rem;
  margin-right: var(--space);
}

.skill__progress {
  background-color: var(--color-theme-white);
  border-radius: .25rem;
  font-size: .75rem;
  height: 1rem;
  display: flex;
  flex-grow: 1;
  overflow: hidden;
}

.skill__progress-bar {
  background-color: var(--color-theme-orange);
  color: var(--color-theme-white);
  display: flex;
  justify-content: center;
}

@media screen and (width <768px) {
  .skill {
    flex-direction: column;
  }
}

</style>
