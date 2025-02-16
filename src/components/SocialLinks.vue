<script lang="ts">
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  defineComponent,
} from 'vue';

import IconBase from './icons/IconBase.vue';
import IconEnvelope from './icons/IconEnvelope.vue';
import IconGithub from './icons/IconGithub.vue';
import IconLinkedin from './icons/IconLinkedin.vue';
import IconTwitter from './icons/IconTwitter.vue';

const networkToImageMap: Record<string, string> = {
  Github: 'icon-github',
  Twitter: 'icon-twitter',
  Linkedin: 'icon-linkedin',
};

export default defineComponent({
  name: 'SocialLinks',
  components: {
    IconBase,
    IconEnvelope,
    IconGithub,
    IconLinkedin,
    IconTwitter,
  },
  props: {
    profiles: {
      type: Array,
      default: (): ReadonlyArray<any> => [],
    },
  },
  data() {
    return {
      iconWidth: '18px',
      iconHeight: '18px',
    };
  },
  computed: {
    socialLinks(): ReadonlyArray<any> {
      return this.profiles.map((profile: any) => ({
        ...profile,
        image: networkToImageMap[profile.network],
      }));
    },
  },
});

</script>

<template>
  <div class="social-links">
    <a
      v-for="profile in socialLinks"
      :key="profile.name"
      class="inline-flex justify-center items-center mr-4 p-2 text-center rounded social-links__item"
      :href="profile.url"
      target="_blank"
      rel="noopener"
    >
      <icon-base
        :class="profile.image"
        :icon-name="profile.image"
        :width="iconWidth"
        :height="iconHeight"
      >
        <icon-twitter
          v-if="profile.image === 'icon-twitter'"
        />
        <icon-github
          v-else-if="profile.image === 'icon-github'"
        />
        <icon-linkedin
          v-else-if="profile.image === 'icon-linkedin'"
        />
        <icon-envelope v-else />
      </icon-base>
    </a>

    <a
      class="inline-flex justify-center items-center mr-4 p-2 text-center rounded social-links__item"
      href="mailto:lambrospd@gmail.com"
    >
      <icon-base
        icon-name="envelope"
        :width="iconWidth"
        :height="iconHeight"
      >
        <icon-envelope />
      </icon-base>
    </a>
  </div>
</template>

<style lang="scss">

@import '../scss/variables';
@import '../scss/breakpoints';

.social-links {
  &__item {
    font-size: 110%;
    transition: background-color .33s ease-in-out;
  }

  > a {
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

  @include media-breakpoint-not-small {
    text-align: left;
  }
}
</style>
