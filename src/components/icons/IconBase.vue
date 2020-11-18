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
    default: '16px',
  })
  width!: string | number;

  @Prop({
    type: [String, Number],
    default: '16px',
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

  @Prop({
    type: Boolean,
    default: false,
  })
  inverted!: boolean;

  get iconGroupClasses(): string[] {
    return [
      'icon-base__group',
      `icon-base__group--${this.iconColor}`,
    ];
  }

  get rootClasses(): string [] {
    let classes = ['icon-base'];
    if (this.inverted) {
      classes.push('icon-base--inverted');
    }

    return classes;
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
    fill: currentColor;

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
