<script>
import NavigationBar from './NavigationBar';

export default {
  name: 'MainHeader',
  components: {
    NavigationBar,
  },
};
</script>
<template>
  <header class="main-header">
    <div class="main-header__container">
      <NavigationBar />
      <div class="main-header__title">
        Lampros Papadimitriou
      </div>
      <div class="main-header__logo" />
    </div>
  </header>
</template>

<style lang="scss">
  @import '../scss/variables';
  @import '../scss/breakpoints';
  @import '../scss/fluid';

  .main-header {
    align-items: center;
    background: $color-header-background;
    color: $color-header-foreground;
    padding: 0 $space-xl;

    @include media-breakpoint-medium {
      padding: 0;
    }

    @include media-breakpoint-small {
      overflow-x: hidden;
      width: 100%;
    }

    &__container {
      @include container;

      align-items: center;
      display: flex;
      flex-direction: row;
      padding-left: 1rem;

      @include media-breakpoint-small {
        align-items: baseline;
        flex-direction: column;
      }

      @include media-breakpoint-medium {
        padding-left: 0;
      }
    }

    &__logo {
      margin-left: $space;
      height: $space-xxl;

      @include media-breakpoint-small {
        display: none;
      }
    }

    &__title {
      flex-grow: 1;
      font-size: 120%;
      text-align: right;

      @include media-breakpoint-small {
        display: none;
      }
    }
  }
</style>
