<script lang="ts">
import {
  defineComponent,
} from 'vue';


export default defineComponent({
  name: 'SpinningLoader',
});

</script>
<template>
  <div class="spinning-loader rounded-full" />
</template>
<style scoped>
  .spinning-loader {
    animation: spinning-loader .75s linear infinite;
    border: .8rem solid #F8F9FA;
    border-right-color: #007BFF;
    height: 5rem;
    width: 5rem;
  }

  @keyframes spinning-loader {
    to {
      transform: rotate(360deg);
    }
  }
</style>
