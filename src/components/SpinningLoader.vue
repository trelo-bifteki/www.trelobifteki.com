<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SpinningLoader',
});

</script>
<template>
  <div class="spinning-loader" />
</template>
<style lang="scss">
  .spinning-loader {
    $spinning-loader-border-width: .8rem;
    $spinning-loader-color-gray: #F8F9FA;
    $spining-loader-color-blue: #007BFF;

    animation: spinning-loader .75s linear infinite;
    border: $spinning-loader-border-width solid $spinning-loader-color-gray;
    border-radius: 50%;
    border-right-color: $spining-loader-color-blue;
    height: 5rem;
    width: 5rem;
  }

  @keyframes spinning-loader {
    to {
      transform: rotate(360deg);
    }
  }
</style>
