<template>
  <ul class="moving-spectrum">
    <li class="moving-spectrum__item" />
    <li class="moving-spectrum__item" />
    <li class="moving-spectrum__item" />
    <li class="moving-spectrum__item" />
  </ul>
</template>
<style lang="scss">
@import '../scss/variables';

.moving-spectrum {
  display: flex;

  &__item {
    align-items: center;
    display: flex;
    justify-content: center;
    min-width: 3rem;
    padding: $space;
    text-align: center;
    transform: skew(-20deg);  /* SKEW */

    &:first-child {
      background-color: $color-spectrum-first-red;
    }

    &:nth-child(2) {
      background-color: $color-spectrum-second-orange;
    }

    &:nth-child(3) {
      background-color: $color-spectrum-third-green;
    }

    &:nth-child(4) {
      background-color: $color-spectrum-fourth-blue;
    }
  }
}
</style>
