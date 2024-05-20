<script lang="ts">
import {
  defineComponent,
} from 'vue';
import IconBase from '@/components/icons/IconBase.vue'
import IconChevronUp from '@/components/icons/IconChevronUp.vue';

export default defineComponent({
  name: 'BioSummary',
  components: {
    IconBase,
    IconChevronUp,
  },
  data() {
    return {
      showMore: false,
    };
  },
  methods: {
    toggle(): void {
      this.showMore = !this.showMore;
    },
  },
});
</script>

<template>
  <article class="bio-summary">
    <p>
      👋 My name is Lampros Papadimitriou.
      🤓 I am a full-stack developer focused on Web technologies
    </p>

    <p>
      👀 I'm interested in software development, information systems and service delivery.
    </p>

    <p>
      👨‍💻 I have worked in a variety of different projects including telecommunications, banking and
      transportation sector.
    </p>

    <p>
      ❤️ I'm passionate about new web technologies, intuitive UX and resilient systems
    </p>

    <transition name="slide">
      <div
        v-if="showMore"
        class="bio-summary__more"
        qa-ref="bio-summary-more"
      >
        <p>
          🌐 I have worked in several projects in different countries (Greece, Germany, Israel, Sweden) and
          I am also happy to work in multicultural working environments.
        </p>

        <p>
          ✨ I have working experience in different aspects of software development (frontend, backend, CI/CD,
          system administration)
        </p>

        <p>
          🤝 I strongly believe a great success factor in software development is team work.
        </p>
      </div>
    </transition>

    <button
      class="flex justify-center items-center border-t p-4 w-full text-party-pink"
      qa-ref="bio-summary-more-button"
      @click="toggle"
    >
      <span v-if="showMore">
        less
      </span>
      <span v-else>
        more
      </span>
      <transition name="rotate">
        <icon-base
          class="ml-2"
          icon-name="icon-chevron"
          :inverted="!showMore"
        >
          <icon-chevron-up />
        </icon-base>
      </transition>
    </button>
  </article>
</template>

<style scoped>

p {
  margin-bottom: 1rem;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform .33s ease-in-out, opacity .33s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10rem);
}

.rotate-enter-from,
.rotate-leave-to {
  transform: rotate(0deg);
  transition: transform .5s ease;
}

.rotate-enter-to,
.rotate-leave-from {
  transform: rotate(180deg);
}

</style>
