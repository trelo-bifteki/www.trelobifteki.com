<script>
export default {
  name: 'SocialLinks',
  props: {
    profiles: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      networkToImageMap: {
        Github: `icon-github`,
        Twitter: `icon-twitter`,
        Linkedin: `icon-linkedin-squared`,
      }
    };
  },
  computed: {
    socialLinks() {
      return this.profiles.map(profile => ({
        ...profile,
        image: this.networkToImageMap[profile.network],
      }));
    },
  },
};
</script>

<template>
  <div class="social-links">
    <a
      v-for="profile in socialLinks"
      :key="profile.name"
      class="social-links__item"
      :href="profile.url"
      target="_blank"
      rel="noopener"
    >
      <i :class="profile.image" />
    </a>

    <a href="tel:+491723990194">
      <i class="icon-whatsapp" />
    </a>

    <a href="mailto:lambrospd@gmail.com">
      <i class="icon-mail" />
    </a>

    <a
      class="social-links__cv-pdf"
      href="/static/resume-en-Lampros_Papadimitriou.pdf"
    >
      <i class="icon-file-pdf" />
    </a>
  </div>
</template>

<style lang="scss">

@import '../scss/variables';
@import '../scss/breakpoints';

.social-links {
  > a {
    border-radius: 50%;
    font-size: 110%;
    margin-right: $space;
    text-decoration: none;
    transition: background-color .33s ease-in-out;

    &:first-child {
      color: $color-rainbow-green;
    }

    &:nth-child(2) {
      color: $color-rainbow-yellow;
    }

    &:nth-child(3) {
      color: $color-rainbow-orange;
    }

    &:nth-child(4) {
      color: $color-rainbow-lila;
    }

    &:nth-child(5) {
      color: $color-rainbow-red;
    }

    &:nth-child(6) {
      color: $color-rainbow-blue;
    }

    &:first-child:hover {
      background-color: $color-rainbow-green;
      color: $color-rainbow-white;
    }

    &:nth-child(2):hover {
      background-color: $color-rainbow-yellow;
      color: $color-rainbow-white;
    }

    &:nth-child(3):hover {
      background-color: $color-rainbow-orange;
      color: $color-rainbow-white;
    }

    &:nth-child(4):hover {
      background-color: $color-rainbow-lila;
      color: $color-rainbow-white;
    }

    &:nth-child(5):hover {
      background-color: $color-rainbow-red;
      color: $color-rainbow-white;
    }

    &:nth-child(6):hover {
      background-color: $color-rainbow-blue;
      color: $color-rainbow-white;
    }
  }

  @include media-breakpoint-medium {
    text-align: center;
  }
}
</style>
