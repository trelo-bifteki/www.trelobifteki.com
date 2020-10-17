<script lang="ts">
import 'reset-css';
import CookieNotification from '@/components/CookieNotification.vue'
import MainFooter from '@/components/MainFooter.vue';
import MainHeader from '@/components/MainHeader.vue';
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
}
</script>

<template>
  <div
    id="app"
    class="app"
  >
    <MainHeader />
    <div class="index__container">
      <router-view />
    </div>
    <div class="app__filler" />
    <MainFooter />
    <CookieNotification />
  </div>
</template>

<style lang="scss">
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
