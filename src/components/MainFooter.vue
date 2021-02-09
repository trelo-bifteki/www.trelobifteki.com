<script lang="ts">
import {
  mapState,
} from 'vuex';
import IconBase from './icons/IconBase.vue';
import IconHeart from './icons/IconHeart.vue';
import IconGithub from './icons/IconGithub.vue';
import SocialLinks from './SocialLinks.vue';
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component({
  name: 'MainFooter',
  components: {
    IconBase,
    IconGithub,
    IconHeart,
    SocialLinks,
  },
})
export default class MainFooter extends Vue {

  @Prop({
    required: true,
    type: String,
  })
  readonly packageVersion!: string;
}
</script>

<template>
  <footer class="main-footer">
    <div class="main-footer__container">
      <div class="main-footer__footnote">
        <div class="main-footer__tool-list">
          Made with
          <icon-base
            class="main-footer__icon-heart"
            icon-color="red"
            icon-name="heart"
          >
            <icon-heart />
          </icon-base>
        </div>
        <div>
          Wanna check code? Visit
          <a
            class="main-footer__github"
            href="https://github.com/trelo-bifteki/www.trelobifteki.com"
            rel="noreferrer"
          >
            <icon-base
              class="main-footer__icon-github"
              icon-color="orange"
              icon-name="github"
            >
              <icon-github />
            </icon-base>
          </a>
        </div>
      </div>
      <SocialLinks />
      <div class="main-footer__version">
        {{ packageVersion }}
      </div>
    </div>
  </footer>
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

    &__icon-heart {
      margin: 0 $space-xs;
    }

    &__tool-list {
      align-items: center;
      display: flex;
    }

    &__github {
      color: $color-theme-orange;
    }

    &__version {
      font-size: $font-size-s;
    }
  }
</style>
