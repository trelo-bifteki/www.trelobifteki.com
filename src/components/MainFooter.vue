<script>
  import SocialLinks from './SocialLinks';

  export default {
    name: 'MainFooter',
    components: {
      SocialLinks
    },
  };
</script>

<template>
  <div class="main-footer">
    <div class="main-footer__container">
      <SocialLinks />
    </div>
  </div>
</template>

<style lang="scss">
  @import '../scss/breakpoints';
  @import '../scss/variables';
  @import '../scss/fluid';
  
  .main-footer {
    background: $color-header-background;
    color: $color-header-foreground;
    display: block;
    padding: $space;

    &__container {
      @include container;

      align-items: center;
      display: flex;
      flex-direction: row;
    }
  }
</style>
