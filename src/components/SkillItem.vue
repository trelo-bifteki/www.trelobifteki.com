<script lang="ts">
import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'SkillItem',
  props: {
    skill: {
      type: Object,
      required: true,
    },
  },
});

</script>

<template>
  <div class="flex py-4 px-0 first:pt-0 justify-center items-center">
    <div
      class="pr-4 w-40"
      qa-ref="skill-item__label"
    >
      {{ skill.label }}
    </div>
    <div class="bg-theme-white flex flex-grow overflow-hidden rounded h-4">
      <div
        class="bg-theme-orange flex justify-center"
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
