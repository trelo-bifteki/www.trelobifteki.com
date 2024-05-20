<script lang="ts">
import {
  defineComponent,
} from 'vue';

import {
  createNamespacedHelpers,
} from 'vuex';

import CookieNotification from '@/components/CookieNotification.vue'
import MainFooter from '@/components/MainFooter.vue';
import MainHeader from '@/components/MainHeader.vue';
import NavigationBar from '@/components/NavigationBar.vue';
import NavigationDrawer from '@/components/NavigationDrawer.vue';
import '@/css/style.css';

const {
  mapState,
} = createNamespacedHelpers('cv');

export default defineComponent({
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
    class="app flex flex-col min-h-screen font-sans bg-white text-gray-900 leading-normal"
  >
    <MainHeader @on-menu-clicked="toggleNavigationDrawer(true)" />
    <div class="index__container">
      <router-view />
    </div>
    <div class="flex-auto" />
    <MainFooter :package-version="packageVersion" />
    <CookieNotification />
    <NavigationDrawer
      qa-ref="app__navigation-drawer"
      :is-visible="isNavigationDrawerVisible"
      @toggle="toggleNavigationDrawer"
    >
      <div class="mb-4">
        <h2 class="font-light p-4">
          Lampros Papadimitriou
        </h2>
      </div>
      <navigation-bar />
    </NavigationDrawer>
  </div>
</template>

<style>
@import 'reset-css';
@import 'css/variables';

*,
*:before,
*:after {
  box-sizing: border-box;
}

</style>
