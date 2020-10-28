<script lang="ts">
import {
  Component,
  Emit,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component
export default class NavigationDrawer extends Vue {
  @Prop({
    default: false,
    type: Boolean
  })
  isVisible!: boolean;

  get rootClasses(): string[] {
    let results = ['navigation-drawer'];
    if (this.isVisible) {
      results.push('navigation-drawer--visible')
    }
    return results;
  }

  @Emit('toggle')
  toggle(): boolean {
    return !this.isVisible;
  }

}
</script>
<template>
  <div
    :class="rootClasses"
    @click="toggle"
  >
    <div class="navigation-drawer__container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
  @import "../scss/variables";

  .navigation-drawer {
    background-color: rgba(0, 0, 0, .4);
    bottom: 0;
    display: none;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: background-color .66s linear;
    z-index: 100;

    &--visible {
      background-color: rgba(0, 0, 0, .4);
      display: block;
    }

    &__container {
      background-color: $color-spectrum-background;
      bottom: 0;
      box-shadow: 0 8px 10px -5px rgba(0, 0, 0, .2),
        0 16px 24px 2px rgba(0, 0, 0, .14),
        0 6px 30px 5px rgba(0, 0, 0, .12);
      color: $color-theme-white;
      padding: $space-l;
      position: absolute;
      right: 0;
      top: 0;
      width: 250px;
    }
  }
</style>
