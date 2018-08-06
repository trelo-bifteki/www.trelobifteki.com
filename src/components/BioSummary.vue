<script>
export default {
  name: 'BioSummary',
  data() {
    return {
      showMore: false,
    };
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
      <div v-if="showMore">
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
      class="button button--plain"
      v-on:click="toggle"
      >
      <span v-if="showMore">
       less
      </span>
      <span v-else>
         more
      </span>
      <transition name="rotate">
        <i
          class="icon-up-open"
           v-if="showMore"
        ></i>
        <i
          class="icon-down-open"
           v-else
        ></i>
      </transition>

    </button>
  </article>
</template>

<style scoped>
  p {
    margin-botom: 1rem;
    margin-bottom: var(--space);
  }

  button {
    background-color: none;
    border-top: 1px solid var(--color-theme-gray-light);
    color: var(--color-girl-party-pink);
    font-size: 1rem;
    padding: var(--space-s);
    width: 100%;
  }

.slide-enter-active, .slide-leave-active {
  transition: opacity .5s ease;
}

.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.rotate-enter-active, .slide-leave-active {
  transition: transform .5s ease;
  transform: rotate(0deg);
}

.rotate-enter, .rotate-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: rotate(180deg);
}

</style>
