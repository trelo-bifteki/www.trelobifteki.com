<script lang="ts">
import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'DurationLabel',
  props: {
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      default: '',
    },
  },
  computed: {
    startYear(): number {
      const then = new Date(this.start);
      return then.getFullYear();
    },
    endYear(): number {
      const then = new Date(this.end);
      return then.getFullYear();
    },
  },
})
</script>
<template>
  <div
    class="duration-label"
    qa-ref="duration-label"
  >
    <span qa-ref="duration-label__start">
      {{ startYear }}
    </span>
    &#8212;
    <span qa-ref="duration-label__end">
      <template v-if="end">
        {{ endYear }}
      </template>
      <template v-else>
        heute
      </template>
    </span>
  </div>
</template>
