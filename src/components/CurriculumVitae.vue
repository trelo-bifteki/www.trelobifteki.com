<script>
import JobItem from './JobItem';
import SkillItem from './SkillItem';

export default {
  name: 'CurriculumVitae',
  components: {
    SkillItem,
    JobItem,
  },
  computed: {
    personalInfo() {
      return this.$store.state.personalInfo;
    },
    skills() {
      return this.$store.state.skills;
    },
    jobs() {
      return this.$store.state.jobs;
    },
    interests() {
      return this.$store.state.interests;
    },
  },
  methods: {
  },
  mounted() {
    this.$store.dispatch('refreshInterests');
    this.$store.dispatch('refreshJobs');
    this.$store.dispatch('refreshPersonalInfo');
    this.$store.dispatch('refreshSkills');
  },
};
</script>

<template>
  <div class="route-cv">
    <section class="route-cv__personal-information">
      <div class="route-cv__avatar">
        <img src="../assets/avatar.jpg"
          alt="avatar"
          class="route-cv__avatar-image">
      </div>

      <div class="route-cv__personal-information-container">
        <h1 class="route-cv__fullname">
          {{ personalInfo.fullname }}
        </h1>

        <h2 class="route-cv__current-job">
          {{ personalInfo.title }} @ {{ personalInfo.currentCompany }}
        </h2>

        <div class="route-cv__summary">
          <p>
            Full stack software developer focused on web &amp; technologies and
            backend infrastructure. My interests include software development,
            system integration and services delivery.
          </p>
        </div>
      </div>
    </section>

    <section class="route-cv__panel">
      <h2 class="route-cv__heading route-cv__panel-label">
        <i class="route-cv__icon route-cv__icon--heart glyphicon glyphicon-heart"></i>
        Interests
      </h2>

      <ul class="route-cv__interests route-cv__panel-container">
        <li
          class="route-cv__interest"
          v-for="(interest, index) in interests"
          v-bind:key="index"
        >
          {{ interest }}
        </li>
      </ul>
    </section>

    <section class="route-cv__panel">
      <h2 class="route-cv__heading route-cv__panel-label">
        <i class="route-cv__icon route-cv__icon--heart glyphicon glyphicon-briefcase"></i>
        Work experience
      </h2>
      <div class="route-cv__jobs route-cv__panel-container">
        <JobItem
          v-for="(job, index) in jobs"
          v-bind:key="index"
          v-bind:job="job"
        ></JobItem>
      </div>
    </section>

    <section class="route-cv__panel">
      <h2 class="route-cv__heading route-cv__panel-label">
        <i class="route-cv__icon route-cv__icon--heart glyphicon glyphicon-briefcase"></i>
        Education
      </h2>
      <div class="route-cv__panel-container route-cv__panel-container--padding">
        <article>
          Ena to xelidoni
        </article>
      </div>
    </section>

    <section class="route-cv__panel">
      <h2 class="route-cv__heading route-cv__panel-label">
        <i class="route-cv__icon glyphicon glyphicon-tower"></i>
        Skills &amp; proficiency
      </h2>
      <div class="route-cv__skills route-cv__panel-container">
        <SkillItem
          v-for="(skill, index) in skills"
          v-bind:skill="skill"
          v-bind:key="index"
        ></SkillItem>
      </div>
    </section>
  </div>
</template>

<style>

@import '../assets/common.css';

.route-cv__avatar {
  margin-right: var(--space-l);
  max-width: 15rem;
  text-align: center;
}

.route-cv__avatar-image {
  border: 2px solid transparent;
  border-radius: 200px;
  max-width: 100%;
}

.route-cv__current-job {
  font-size: var(--font-size-l);
  margin-bottom: var(--space);
  text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
  text-transform: uppercase;
}

.route-cv__heading {
  color: var(--color-theme-orange);
  font-size: var(--font-size-l);
  margin: var(--space-l);
}

.route-cv__fullname {
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-s);
  text-transform: uppercase;
  text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
}

.route-cv__interests {
  box-sizing: border-box;
  flex-grow: 1;
  list-style-type: disc;
  margin: var(--space) var(--space) var(--space) 0;
  padding: 0;
}

.route-cv__interest {
  box-sizing: border-box;
  list-style-type: none;
  padding: var(--space);
}

.route-cv__icon {
  border-radius: 50%;
  background: var(--highlight-color);
  color: white;
  font-size: 65%;
  margin-right: var(--space);
}

.route-cv__panel {
  border-top: 1px solid #DCDCDC;
  display: flex;
  flex-direction: row;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
}

.route-cv__panel:first {
  border-top: 0;
}

.route-cv__panel-label {
  width: 25%;
}

.route-cv__panel-container {
  display: block;
  width: 75%;
}

.route-cv__panel-container--padding {
  padding: var(--space);
}

.route-cv__personal-information {
  background: var(--color-theme-gray);
  color: var(--color-theme-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--space-l);
}

.route-cv__skills {
  padding: var(--space);
}

.route-cv__jobs {
  padding: var(--space);
}

.route-cv__personal-information-container {
  max-width: 70rem;
}

@media screen and (min-width: 768px) {
  .route-cv__personal-information {
    flex-direction: row;
  }

  .route-cv__avatar {
    max-width: 10rem;
  }
}
</style>
