<script lang="ts">
import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'NavigationDrawer',
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  emits: [ 'toggle' ],
  computed: {
    rootClasses(): string[] {
      const results = [ 'navigation-drawer' ];
      if (this.isVisible) {
        results.push('navigation-drawer--visible');
      }
      return results;
    },
    containerClasses(): string[] {
      const results = [ 'navigation-drawer__container' ];
      if (this.isVisible) {
        results.push('navigation-drawer__container--visible');
      }
      return results;
    },
  },
  methods: {
    toggle(): void {
      this.$emit('toggle', !this.isVisible);
    },
  },
});

</script>
<template>
  <div
    :class="rootClasses"
    qa-ref="navigation-drawer"
    @click="toggle"
  >
    <div :class="containerClasses">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
  @import "../scss/variables";

  .navigation-drawer {
    background-color: transparent;
    bottom: 0;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: fixed;
    right: 0;
    top: 0;
    transition: background-color .5s ease,
      visibility .5s linear;
    visibility: hidden;
    width: 100%;
    z-index: 100;

    &--visible {
      background-color: rgba(0, 0, 0, .4);
      visibility: visible;
    }

    &__container {
      background-color: $color-spectrum-background;
      bottom: 0;
      box-shadow: 0 8px 10px 5px rgba(0, 0, 0, .2),
        0 16px 24px 2px rgba(0, 0, 0, .14),
        0 6px 30px 5px rgba(0, 0, 0, .12);
      color: $color-theme-white;
      left: 0;
      position: absolute;
      top: 0;
      transform: translateX(-250px);
      transition: transform .5s ease;
      width: 250px;

      &--visible {
        transform: translateX(0);
      }
    }
  }
</style>
