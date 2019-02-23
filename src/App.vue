<script>
import 'reset-css';
import MainFooter from '@/components/MainFooter';
import MainHeader from '@/components/MainHeader';

export default {
  name: 'App',
  metaInfo: {
    title: 'CV',
    titleTemplate: '%s | Lampros Papadimitriou trelobifteki',
  },
  components: {
    MainFooter,
    MainHeader,
  },
};
</script>

<template>
  <div
    id="app"
    class="app"
  >
    <MainHeader />
    <div class="index__container">
      <router-view/>
    </div>
    <div  class="app__filler"></div>
    <MainFooter />
  </div>
</template>

<style lang="scss">

@import 'assets/common';
@import 'assets/button';
@import 'scss/variables';

html,
body {
  background-color: $color-white;
  color: $color-gray-darkest;
  font-family: $font-family-base;
  font-size: 100%;
  line-height: 1.5;
}

*, *:before, *:after {
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
