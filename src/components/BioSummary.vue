<script>
export default {
  name: 'BioSummary',
  data() {
    return { showMore: false, };
  },
  methods: {
    toggle() {
      this.showMore = !this.showMore;
    },
  },
};
</script>

<template>
  <article class="bio-summary">
    <p>
      Software engineer focused on Web &amp; Mobile technologies. Particularly interested
      in software development, system integration and service delivery.
    </p>
    <p>
      Great experience in J2EE and Spring Technologies. Delivering solutions routing and
      IPTV platforms and implementing solutions for backend infrastructure.
    </p>

    <p>
      Great experience in implemeting UI and Web application. Designing UI application as
      administrative and end-user application using several tools and frameworks as
      AngularJS, VueJS, Primefaces / Richfaces and GWT.
    </p>

    <transition name="slide">
      <div
        v-if="showMore"
        qa-ref="bio-summary-more"
      >
        <p>
          Great experience UNIX scripting, database development and Java technologies. Good
          experience in RDBMS and UNIX administration and open-source technologies
          (Postgres, MySQL, Oracle, Linux, firewalling, Apache).
        </p>

        <p>
          Working as Full stack developer for CHECK24 Vergleichsportal GmbH and developing
          backend and UI components using Microservices architecture.
        </p>

        <p>
          Worked as external consultant for Ericsson Hellas. Bachelor's degree in Informatics and
          oriented in Information Systems.
        </p>

        <p>
          Working in spare time for website development and experimenting with new
          technlogies (e.g. VueJs, Material Design, Sass)
        </p>
      </div>
    </transition>

    <button
      class="bio-summary__more-button"
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
        <i
          v-if="showMore"
          class="icon-up-open"
        />
        <i
          v-else
          class="icon-down-open"
        />
      </transition>
    </button>
  </article>
</template>

<style lang="scss">

@import "../scss/variables";

.bio-summary {
  p {
    margin-bottom: $space;
  }

  &__more-button {
    background-color: transparent;
    border-bottom: none;
    border-left: none;
    border-right: none;
    border-top: 1px solid $color-theme-gray-light;
    color: $color-girl-party-pink;
    cursor: pointer;
    font-size: 1rem;
    padding: $space;
    width: 100%;
  }
}

.slide-enter-active,
.slide-leave-active {
  height: auto;
  transform: scaleY(1);
  transform-origin: top;
  transition: transform .33s  ease-out;
}

.slide-enter,
.slide-leave-to {
  transform: scaleY(0);
}

.rotate-enter-active,
.rotate-leave-active {
  transform: rotate(0deg);
  transition: transform .5s ease;
}

.rotate-enter,
.rotate-leave-to {
  transform: rotate(180deg);
}

</style>
