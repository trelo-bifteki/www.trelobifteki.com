<script>
  export default {
    name: 'CookieNotification',
    data() {
      return {
        isVisible: false,
        googleAnalytics: null,
      };
    },
    created() {
      this.isVisible = true;
    },

    methods: {
      accept() {
        this.isVisible = false;
        this.$emit('onAccept');
      },
      deny() {
        this.isVisible = false;
      },
    }
  };
</script>
<template>
  <transition name="slide-up">
    <div 
      class="cookie-notification"
      v-if="isVisible"
    >
      Hey! This site uses cookies for Google Analytics
      <button
        class="cookie-notification__button"
        @click="accept"
      >
        OK! Got it
      </button>
      <button 
        class="cookie-notification__button"
        @click="deny"
      >
        No way!
      </button>
    </div>
  </transition>
</template>

<style lang="scss">
  @import "../assets/variables.scss";

  .cookie-notification {
    background-color: #323232;
    border-radius: 5px;
    bottom: $space;
    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2),
                0 6px 10px 0 rgba(0,0,0,.14), 
                0 1px 18px 0 rgba(0,0,0,.12);
    color: $color-theme-white;
    font-size: 1rem;
    padding: $space $space-l;
    position: fixed;
    left: $space;

    &__button {
      background-color: transparent;
      border: none;
      color: #448aff;
      cursor: pointer;
      font-size: 100%;
      font-weight: 500;
      padding-left: $space;
    }
  }

  .slide-up-enter-active,
  .slide-up-leave-active {
    transition: transform .33s  ease-out;
    transform: translateY(0);
  }

  .slide-up-enter,
  .slide-up-leave-to {
    transform: translateY(5rem);
  }
</style>