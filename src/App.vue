<script lang="ts">
import CookieNotification from '@/components/CookieNotification.vue'
import MainFooter from '@/components/MainFooter.vue';
import MainHeader from '@/components/MainHeader.vue';
import NavigationDrawer from '@/components/NavigationDrawer.vue';

import {
  Component,
  Vue,
} from 'vue-property-decorator';

@Component({
  name: 'App',
  components: {
    CookieNotification,
    MainFooter,
    MainHeader,
    NavigationDrawer,
  },
  metaInfo: {
    title: 'CV',
    titleTemplate: '%s | Lampros Papadimitriou - trelobifteki',
    htmlAttrs: {
      lang: 'en'
    }
  }
})
export default class App extends Vue {
  isNavigationDrawerVisible = false;

  toggleNavigationDrawer(isVisible: boolean): void {
    this.isNavigationDrawerVisible = isVisible;
  }
}
</script>

<template>
  <div
    id="app"
    class="app"
  >
    <MainHeader />
    <div @click="toggleNavigationDrawer(true)">X</div>
    <div class="index__container">
      <router-view />
    </div>
    <div class="app__filler" />
    <MainFooter />
    <CookieNotification />
    <NavigationDrawer
      qa-ref="app__navigation-drawer"
      :is-visible="isNavigationDrawerVisible"
      @toggle="toggleNavigationDrawer"
    >
      <h2>Luxurotuck</h2>
    </NavigationDrawer>
  </div>
</template>

<style lang="scss">
@import 'reset-css';
@import 'scss/variables';

html,
body {
  background-color: $color-white;
  color: $color-gray-darkest;
  font-family: $font-family-base;
  font-size: 100%;
  line-height: 1.5;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__filler {
    flex: 1 1 auto;
  }
}
</style>
