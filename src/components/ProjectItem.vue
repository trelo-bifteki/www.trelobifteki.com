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
    class="project-item relative"
    qa-ref="project-item"
  >
    <div class="grid md:grid-cols-[auto_1fr] pl-4">
      <div class="project-item__duration flex relative items-center text-rainbow-red p-4 text-lg">
        <duration-label
          :start="project.startDate"
          :end="project.endDate"
        />
      </div>
      <div
        class="flex items-center text-xl text-rainbow-orange font-light p-4"
        qa-ref="project-item__title"
      >
        {{ project.title }}
      </div>
      <div class="p-4 text-rainbow-lila">
        Customer
      </div>
      <div
        class="p-4"
        qa-ref="project-item__customer"
      >
        {{ project.customer }}
      </div>
      <div class="p-4 text-rainbow-lila">
        Description
      </div>
      <div
        class="p-4"
        qa-ref="project-item__description"
      >
        {{ project.description }}
      </div>
      <div class="p-4 text-rainbow-lila">
        Position
      </div>
      <div class="p-4">
        {{ project.position }}
      </div>
      <div class="p-4 text-rainbow-lila">
        Tasks
      </div>
      <div class="p-4">
        <ul>
          <li
            v-for="skill in project.tasks"
            :key="skill"
          >
            <span class="text-rainbow-blue">
              &dash;&nbsp;
            </span>
            {{ skill }}
          </li>
        </ul>
      </div>
      <div class="p-4 text-rainbow-lila">
        Technologies
      </div>
      <div class="p-4">
        <div class="project-item__technologies flex flex-col md:flex-row md:flex-wrap max-w-xl">
          <div
            v-for="technology in project.technologies"
            :key="technology"
            class="project-item__technology pr-4"
          >
            <span class="text-rainbow-blue">
              &dash;&nbsp;
            </span>
            {{ technology }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-item__duration::after {
  background-color: var(--color-rainbow-orange);
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

.project-item::after {
    border-left: 5px solid var(--color-rainbow-orange);
    bottom: 0;
    content: "";
    left: var(--space-s);
    position: absolute;
    top: 0;
    width: 1rem;
    z-index: 1;
}
</style>
