<template>
  <div id="app">
    <div class="index__container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>

@import 'reset-css';
@import 'assets/common.css';
@import 'assets/button.css';

html,
body {
  background-color: #FFF;
  color: #222;
  font-family:  system-ui,Helvetica, Arial, sans-serif;
  font-size: 100%;
}

*, *:before, *:after {
  box-sizing: border-box;
}

</style>
