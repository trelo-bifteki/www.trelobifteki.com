<script>

  const IS_GDPR_ACCEPTED = 'trelobifteki.com:isGdprAccepted';

  export default {
    name: 'CookieNotification',
    data() {
      return {
        isVisible: false,
        googleAnalytics: null,
      };
    },
    mounted() {
      if (localStorage) {
        const gdpr = localStorage[IS_GDPR_ACCEPTED];
        this.isVisible = gdpr != "true";
      }
    },

    methods: {
      acceptGdpr() {
        if (localStorage) {
          localStorage[IS_GDPR_ACCEPTED] = true;
        }
      },
      accept() {
        this.$ga.enable();
        this.acceptGdpr();
        this.$ga.page(this.$router);
        this.isVisible = false;
      },
      deny() {
        this.$ga.disable();
        this.acceptGdpr();
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
      <div class="cookie-notification__actions">
        <button
          class="cookie-notification__button"
          @click="accept"
        >
          Got it!
        </button>
        <button 
          class="cookie-notification__button"
          @click="deny"
        >
          No way!
        </button>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
  @import '../scss/breakpoints';
  @import "../scss/variables";

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
    right: $space;

    &__actions {
      display: inline-block;
      padding-left: $space;

      @include media-breakpoint-small {
        display: block;
        padding-left: 0;
        margin-top: $space-s;
      }
    }

    &__button {
      background-color: transparent;
      border: none;
      color: #448aff;
      cursor: pointer;
      font-size: 100%;
      font-weight: 500;
      padding: 0 $space 0 0;
    }

    @include media-breakpoint-medium {
      bottom: 0;
      border-radius: 0;
      left: 0;
      right: 0;
    }
  }

  .slide-up-enter-active,
  .slide-up-leave-active {
    opacity: 1;
    transition: transform .33s  ease-out,
                opacity .33s ease-out;
    transform: translateY(0);
  }

  .slide-up-enter,
  .slide-up-leave-to {
    opacity: 0;
    transform: translateY(5rem);
  }
</style>