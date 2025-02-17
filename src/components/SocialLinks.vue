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
      class="inline-flex justify-center items-center mr-4 p-2 text-center rounded
            text-lg transition-colors duration-300 ease-in-out sm:text-left"
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

<style scoped>

.social-links > a:first-child {
  color: var(--color-rainbow-green);
}

.social-links > a:first-child:hover {
  background-color: var(--color-rainbow-green);
  color: var(--color-rainbow-white);
}

.social-links > a:nth-child(2) {
  color: var(--color-rainbow-yellow);
}

.social-links > a:nth-child(2):hover {
  background-color: var(--color-rainbow-yellow);
  color: var(--color-rainbow-white);
}

.social-links > a:nth-child(3) {
  color: var(--color-rainbow-orange);
}

.social-links > a:nth-child(3):hover {
  background-color: var(--color-rainbow-orange);
  color: var(--color-rainbow-white);
}


.social-links > a:nth-child(4) {
  color: var(--color-rainbow-lila);
}

.social-links > a:nth-child(4):hover {
  background-color: var(--color-rainbow-lila);
  color: var(--color-rainbow-white);
}
</style>
