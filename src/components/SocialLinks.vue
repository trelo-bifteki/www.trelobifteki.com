<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import IconBase from './icons/IconBase.vue';
import IconEnvelope from './icons/IconEnvelope.vue';
import IconGithub from './icons/IconGithub.vue';
import IconLinkedin from './icons/IconLinkedin.vue';
import IconTwitter from './icons/IconTwitter.vue';

@Component({
  components: {
    IconBase,
    IconEnvelope,
    IconGithub,
    IconLinkedin,
    IconTwitter,
  }
})
export default class SocialLinks extends Vue {

  @Prop({
    type: Array,
    default: () => [],
  })
  readonly profiles!: ReadonlyArray<any>;

  readonly networkToImageMap: Record<string, string> = {
    Github: 'icon-github',
    Twitter: 'icon-twitter',
    Linkedin: 'icon-linkedin',
  };

  readonly iconWidth = '18px';
  readonly iconHeight = '18px';

  get socialLinks(): ReadonlyArray<any> {
    const networkToImageMap = this.networkToImageMap as Record<any, any>;
    return this.profiles.map((profile: any) => ({
      ...profile,
      image: networkToImageMap[profile.network],
    }));
  }
}
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
      class="social-links__item"
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
    align-items: center;
    border-radius: 50%;
    display: inline-flex;
    font-size: 110%;
    justify-content: center;
    margin-right: $space;
    padding: $space-s;
    text-decoration: none;
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

  @include media-breakpoint-medium {
    text-align: center;
  }
}
</style>
