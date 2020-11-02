<script>
import NavigationBar from './NavigationBar.vue';
import IconBase from './icons/IconBase.vue';
import IconBars from './icons/IconBars.vue';

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
    NavigationBar,
  },
})
export default class MainHeader extends Vue {

  @Emit('onMenuClicked')
  clickMenu() {
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
      <!--
      <NavigationBar />
      -->
      <div class="main-header__title">
        Lampros Papadimitriou
      </div>
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

      align-items: center;
      display: flex;
      flex-direction: row;
    }

    &__menu-button {
      background-color: transparent;
      border: none;
      border-radius: 50%;
      color: $color-white;
      cursor: pointer;
      padding: $space;
      transition: background-color .33s ease-out;

      &:hover {
        background-color: rgba(255, 255, 255, .2);
      }
    }

    &__title {
      flex-grow: 1;
      font-size: 120%;
      padding: $space 0;
      text-align: right;
      visibility: hidden;

      @include media-breakpoint-not-small {
        visibility: visible;
      }
    }
  }
</style>
