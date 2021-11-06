<script lang="ts">
import SocialLinks from './SocialLinks.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'PersonalInformation',
  components: {
    SocialLinks,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    location: {
      type: Object,
      required: true,
    },
    profiles: {
      type: Array,
      required: true,
    },
  },
})

</script>

<template>
  <section class="personal-information">
    <div class="personal-information__avatar">
      <img
        src="../assets/avatar-small.jpg"
        alt="avatar"
        class="personal-information__avatar-image"
      >
    </div>

    <div class="personal-information__container">
      <h1 class="personal-information__fullname">
        {{ name }}
      </h1>

      <h2 class="personal-information__current-job">
        {{ title }} @ {{ company }}
      </h2>

      <p class="personal-information__location">
        <i class="icon-map" />
        {{ location.city }}, {{ location.region }}, {{ location.countryCode }}
      </p>
      <div>
        <SocialLinks :profiles="profiles" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">

@import "../scss/variables";
@import "../scss/breakpoints";

.personal-information {
  background-color: $color-theme-white;
  border-bottom: 1px solid $color-theme-orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: $space-l;
  text-align: center;

  &__avatar {
    margin-bottom: $space;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 10rem;
  }

  &__avatar-image {
    border: 2px solid transparent;
    border-radius: 200px;
    box-shadow: 2px 4px 12px 0px rgba(0, 0, 0, .5);
    max-width: 100%;

    &:hover {
      animation: wigglewiggle 2s infinite;
    }
  }

  &__cv-pdf {
    color: $color-theme-lila-accent;
  }

  &__fullname {
    color: $color-theme-orange;
    font-size: $font-size-xl;
    margin-bottom: $space-s;
    text-transform: uppercase;
  }

  &__current-job {
    color: $color-theme-lila;
    font-size: $font-size-ml;
    margin-bottom: $space;
    text-transform: uppercase;
  }

  &__location {
    color: $color-theme-lila;
    margin: $space 0;

  }

  &__container {
    flex-grow: 1;
    padding-top: 1rem;
  }

  @keyframes wigglewiggle {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(5deg);
    }
    75% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }

  @include media-breakpoint-not-small {
    flex-direction: row;
    text-align: left;
  }
}

@media screen and (min-width: 768px) {
  .personal-information {

    &__avatar {
      margin-bottom: 0;
      margin-left: 0;
      margin-right: $space-l;
    }

    &__container {
      max-width: 70rem;
      padding-left: $space-xl;
      padding-top: 0;
    }
  }
}

</style>
