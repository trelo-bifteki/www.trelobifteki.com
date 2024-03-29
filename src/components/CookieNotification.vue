<script lang="ts">

import gdprService from '@/services/localStorage';
import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'CookieNotification',
  data() {
    return {
      isVisible: false,
      googleAnalytics: null,
    };
  },
  mounted() {
    this.isVisible = !gdprService.isGdprAccepted();
  },
  methods: {
    accept(): void {
      gdprService.acceptGdpr();
      this.isVisible = false;
    },
    deny(): void {
      gdprService.acceptGdpr();
      this.isVisible = false;
    },
  },
});
</script>
<template>
  <transition name="slide-up">
    <div
      v-if="isVisible"
      class="cookie-notification"
      qa-ref="cookie-notification"
    >
      Hey! This site uses cookies for Google Analytics
      <div class="cookie-notification__actions">
        <button
          class="cookie-notification__button cookie-notification__button--ok"
          qa-ref="cookie-notification-button-yes"
          @click="accept"
        >
          Got it!
        </button>
        <button
          class="cookie-notification__button cookie-notification__button--no"
          qa-ref="cookie-notification-button-no"
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
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2),
      0 6px 10px 0 rgba(0, 0, 0, .14),
      0 1px 18px 0 rgba(0, 0, 0, .12);
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
        margin-top: $space-s;
        padding-left: 0;
      }
    }

    &__button {
      background-color: transparent;
      border: none;
      color: #448AFF;
      cursor: pointer;
      font-size: 100%;
      font-weight: 500;
      padding: 0 $space 0 0;
    }

    @include media-breakpoint-medium {
      border-radius: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

  .slide-up-enter-from,
  .slide-up-leave-to {
    opacity: 1;
    transform: translateY(0);
    transition: transform .33s ease-out,
      opacity .33s ease-out;
  }

  .slide-up-enter-to,
  .slide-up-leave-from {
    opacity: 0;
    transform: translateY(5rem);
  }
</style>
