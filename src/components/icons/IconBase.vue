<script lang="ts">
import {
  defineComponent,
} from 'vue';


export default defineComponent({
  name: 'IconBase',
  props: {
    width: {
      type: [ String, Number ],
      default: '16px',
    },
    height: {
      type: [ String, Number ],
      default: '16px',
    },
    iconColor: {
      type: String,
      default: 'default',
    },
    iconName: {
      type: String,
      default: '',
    },
    inverted: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    iconGroupClasses(): string[] {
      return [
        'icon-base__group',
        `icon-base__group--${this.iconColor}`,
      ];
    },
    rootClasses(): string [] {
      const classes = [ 'icon-base' ];
      if (this.inverted) {
        classes.push('icon-base--inverted');
      }

      return classes;
    },
  },
})
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="iconName"
    role="presentation"
    :class="rootClasses"
  >
    <g :class="iconGroupClasses">
      <slot />
    </g>
  </svg>
</template>

<style lang="scss">
@import '../../scss/variables';

.icon-base {
  display: inline-block;
  transform: rotate(0deg);
  transition: transform .33s ease-out;
  vertical-align: baseline;

  &__group {
    &--default {
      fill: currentColor;
    }

    &--orange {
      fill: $color-theme-orange;
    }

    &--red {
      fill: $color-theme-red;
    }
  }

  &--inverted {
    transform: rotate(180deg);
  }
}
</style>
