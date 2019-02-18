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
      <div class="main-footer__footnote">
        <div>
          Made with
          <i class="main-footer__heart icon-heart" />
        </div>
        <div>
          Wanna check code? Visit
          <a
            class="main-footer__github"
            href="https://github.com/trelo-bifteki/www.trelobifteki.com"
            rel="noreferrer"
          >
            <i class="icon-github" />
          </a>
        </div>
      </div>
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

      @include media-breakpoint-small {
        flex-direction: column;
      }
    }

    &__footnote {
      display: flex;
      flex-direction: row;
      flex-grow: 1;

      @include media-breakpoint-small {
        flex-direction: column;
        margin-bottom: $space;
      }
    }

    &__heart {
      color: $color-theme-red;
    }

    &__github {
      color: $color-theme-orange;
    }
  }
</style>
