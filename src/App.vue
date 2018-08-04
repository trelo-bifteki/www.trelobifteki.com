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

html,
body {
  background-color: #FFF;
  color: #222;
  font-family: "Lato", Helvetica, Arial, sans-serif;
}

</style>
