declare module 'vue' {
  import {
    CompatVue,
  } from '@vue/runtime-dom'
  const Vue: CompatVue
  export default Vue
  export * from '@vue/runtime-dom'
}

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
  export * from '@vue/runtime-dom'
}
