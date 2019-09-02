<script>
import SocialLinks from './SocialLinks';

export default {
  name: 'PersonalInformation',
  components: {
    SocialLinks,
  },
  computed: {
    personalInfo() {
      return this.$store.state.personalInfo;
    },
  },
  mounted() {
    this.$store.dispatch('refreshPersonalInfo');
  },
};
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
        {{ personalInfo.fullname }}
      </h1>

      <h2 class="personal-information__current-job">
        {{ personalInfo.title }} @ {{ personalInfo.currentCompany }}
      </h2>

      <p class="personal-information__location">
        <i class="icon-map" />
        Munich, Bavaria, Germany
      </p>
      <div class="personal-information__links">
        <SocialLinks />
        <a
          class="personal-information__cv-pdf"
          href="/static/resume-en-Lampros_Papadimitriou.pdf"
        >
          <i class="icon-file-pdf" />
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss">

@import "../assets/variables.scss";
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
    width: 10rem;
    text-align: center;
  }

  &__avatar-image {
    border: 2px solid transparent;
    box-shadow: 2px 4px 12px 0px rgba(0,0,0,0.5);
    border-radius: 200px;
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

&__links {
  display: flex;
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

  @include media-breakpoint-not-medium {
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
      padding-top: 0;
      padding-left: $space-xl;
    }
  }
}

</style>
