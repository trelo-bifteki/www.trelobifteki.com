<script lang="ts">
import NavigationBar from './NavigationBar.vue';
import IconBase from './icons/IconBase.vue';
import IconBars from './icons/IconBars.vue';
import MovingSpectrum from './MovingSpectrum.vue';

import {
  Component,
  Emit,
  Vue,
} from 'vue-property-decorator';

@Component({
  name: 'MainHeader',
  components: {
    IconBars,
    IconBase,
    MovingSpectrum,
    NavigationBar,
  },
})
export default class MainHeader extends Vue {

  @Emit('onMenuClicked')
  clickMenu(): boolean {
    return true;
  }

}
</script>
<template>
  <header class="main-header">
    <div class="main-header__container">
      <button
        class="main-header__menu-button"
        qa-ref="main-header__menu-button"
        @click="clickMenu"
      >
        <IconBase>
          <IconBars />
        </IconBase>
      </button>
      <navigation-bar
        class="main-header__navigation-bar"
        :is-horizontal="true"
      />
      <div class="main-header__title">
        Lampros Papadimitriou
      </div>
      <moving-spectrum class="main-header__spectrum-logo" />
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
    overflow-x: hidden;
    padding: 0;
    width: 100%;

    &__container {
      @include body-container;

      align-items: stretch;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      min-height: 3.5rem;
      padding-right: $space-xl;
    }

    &__menu-button {
      background-color: transparent;
      border: none;
      border-radius: 50%;
      color: $color-white;
      cursor: pointer;
      margin: $space-s;
      padding: $space-s;
      transition: background-color .33s ease-out;

      &:hover {
        background-color: rgba(255, 255, 255, .2);
      }

      @include media-breakpoint-not-small {
        display: none;
      }
    }

    &__navigation-bar {
      display: none;

      @include media-breakpoint-not-small {
        display: inline-block;
      }
    }

    &__spectrum-logo {
      @include media-breakpoint-not-small {
        display: none;
      }
    }

    &__title {
      display: none;
      flex-grow: 1;
      font-size: 120%;
      padding: $space-s $space-xl;
      text-align: right;

      @include media-breakpoint-not-small {
        align-items: center;
        display: flex;
        flex-direction: row-reverse;
      }
    }
  }
</style>
