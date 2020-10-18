<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component
export default class IconBase extends Vue {
  @Prop({
    type: [String, Number],
    default: '1rem',
  })
  width!: string | number;

  @Prop({
    type: [String, Number],
    default: '1rem',
  })
  height!: string | number;

  @Prop({
    type: String,
    default: 'default',
  })
  iconColor!: string;

  @Prop({
    type: String,
    default: '',
  })
  iconName!: string;

  get iconGroupClasses(): string[] {
    return [
      'icon-base__group',
      `icon-base__group--${this.iconColor}`,
    ]
  }
}
</script>
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 512 512"
    :aria-labelledby="iconName"
    role="presentation"
    class="icon-base"
  >
    <g :class="iconGroupClasses">
      <slot />
    </g>
  </svg>
</template>

<style lang="scss">
@import '../../scss/variables';

.icon-base {
  &__group {
    fill: currentColor;

    &--red {
      fill: $color-theme-red;
    }
  }
}
</style>
