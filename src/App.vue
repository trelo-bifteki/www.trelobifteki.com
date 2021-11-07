<script lang="ts">
import Vue from 'vue';
import {
  createNamespacedHelpers,
} from 'vuex';

import CookieNotification from '@/components/CookieNotification.vue'
import MainFooter from '@/components/MainFooter.vue';
import MainHeader from '@/components/MainHeader.vue';
import NavigationBar from '@/components/NavigationBar.vue';
import NavigationDrawer from '@/components/NavigationDrawer.vue';

const {
  mapState,
} = createNamespacedHelpers('cv');

export default Vue.extend({
  name: 'App',
  components: {
    CookieNotification,
    MainFooter,
    MainHeader,
    NavigationBar,
    NavigationDrawer,
  },
  metaInfo: {
    title: 'CV',
    titleTemplate: '%s | Lampros Papadimitriou - trelobifteki',
    htmlAttrs: {
      lang: 'en',
    },
  },
  data() {
    return {
      isNavigationDrawerVisible: false,
    };
  },
  computed: {
    ...mapState([
      'packageVersion',
    ]),
  },
  methods: {
    toggleNavigationDrawer(isVisible: boolean): void {
      this.isNavigationDrawerVisible = isVisible;
    },
  },
});

</script>

<template>
  <div
    id="app"
    class="app"
  >
    <MainHeader @onMenuClicked="toggleNavigationDrawer(true)" />
    <div class="index__container">
      <router-view />
    </div>
    <div class="app__filler" />
    <MainFooter :package-version="packageVersion" />
    <CookieNotification />
    <NavigationDrawer
      qa-ref="app__navigation-drawer"
      :is-visible="isNavigationDrawerVisible"
      @toggle="toggleNavigationDrawer"
    >
      <div class="app__drawer-header">
        <h2 class="app__title">
          Lampros Papadimitriou
        </h2>
      </div>
      <navigation-bar />
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

  &__drawer-header {
    margin-bottom: $space;
  }

  &__filler {
    flex: 1 1 auto;
  }

  &__title {
    font-weight: 300;
    padding: $space;
  }
}
</style>
