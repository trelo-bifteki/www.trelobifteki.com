<template>
  <div class="project-list">
    <h1 class="project-list__headline">
      <i class="icon-briefcase" />
      Projects
    </h1>

    <div class="project-list__subheader">
      Some personal projects that I am developing through my free-time
    </div>

    <h2>
      My personal website
    </h2>
  </div>
</template>

<style lang="scss">
  @import "../scss/variables";
  @import "../scss/fluid";
  @import "../scss/typography";

  .project-list{
      @include body-container;

      &__headline {
        @include headline;
        color: $color-rainbow-red;
        font-size: $font-size-xxl;
      }

      &__subheader {
        @include paragraph;
      }
  }
</style>
