<script>
import JobItem from './JobItem';
import SkillItem from './SkillItem';
import EducationItem from './EducationItem';

export default {
  name: 'CurriculumVitae',
  components: {
    EducationItem,
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
    education() {
      return this.$store.state.education;
    },
  },
  methods: {
  },
  mounted() {
    this.$store.dispatch('refreshEducation');
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
          </p>
        </div>
      </div>
    </section>

    <section class="route-cv__panel">
      <h2 class="route-cv__heading route-cv__panel-label">
        <i class="route-cv__interest-icon icon-user"></i>
        Summary
      </h2>
      <article class="route-cv__panel-container route-cv__panel-container--padding">
        <p class="route-cv__summary-paragraph">
          Full stack software developer focused on web &amp; technologies and
          backend infrastructure. My interests include software development,
          system integration and services delivery.
        </p>
        <p class="route-cv__summary-paragraph">
          Great experience in J2EE and Spring Technologies. Working with Java EE  technologies
          for routing platforms and designing UI application as administrative and end-user
           applications.
        </p>
      </article>
    </section>

    <section class="route-cv__panel">
      <h2 class="route-cv__heading route-cv__panel-label">
        <i class="route-cv__icon icon-heart"></i>
        Interests
      </h2>

      <ul class="route-cv__interests route-cv__panel-container">
        <li
          class="route-cv__interest"
          v-for="(interest, index) in interests"
          v-bind:key="index"
        >
          <i class="route-cv__interest-icon icon-heart"></i>
          {{ interest }}
        </li>
      </ul>
    </section>

    <section class="route-cv__panel">
      <h2 class="route-cv__heading route-cv__panel-label">
        <i class="route-cv__icon icon-briefcase"></i>
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
        <i class="route-cv__icon icon-graduation-cap"></i>
        Education
      </h2>
      <div class="route-cv__panel-container route-cv__panel-container--padding">
        <EducationItem
          v-for="(item, index) in education"
          v-bind:item="item"
          v-bind:key="index"
        ></EducationItem>
      </div>
    </section>

    <section class="route-cv__panel">
      <h2 class="route-cv__heading route-cv__panel-label">
        <i class="route-cv__icon icon-star"></i>
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

.route-cv__avatar {
  margin-bottom: var(--space);
  margin-left: auto;
  margin-right: auto;
  max-width: 10rem;
  text-align: center;
}

.route-cv__avatar-image {
  border: 2px solid transparent;
  border-radius: 200px;
  max-width: 100%;
}

.route-cv__current-job {
  color: beige;
  font-size: var(--font-size-l);
  margin-bottom: var(--space);
  text-shadow: 2px 2px 2px rgba(150, 150, 150, 1);
  text-transform: uppercase;
}

.route-cv__heading {
  color: var(--color-theme-red);
  font-size: var(--font-size-l);
  margin: var(--space);
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

.route-cv__interest-icon {
  color: var(--color-theme-red);
  margin-right: var(--space-s)
}

.route-cv__icon {
  color: var(--color-theme-red);
  margin-right: var(--space);
}

.route-cv__panel {
  border-top: 1px solid var(--color-theme-gray-light);
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
}

.route-cv__panel:first-child {
  border-top: 0;
}

.route-cv__panel:first {
  border-top: 0;
}

.route-cv__panel-label {
  width: auto;
}

.route-cv__panel-container {
  display: block;
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
  text-align: center;
}

.route-cv__skills {
  padding: var(--space);
}

.route-cv__jobs {
  padding: var(--space);
}

.route-cv__summary-paragraph {
  margin-bottom: var(--space);
}

.route-cv__personal-information-container {
  max-width: 70rem;
}

@media screen and (width >=768px)  {
  .route-cv__avatar {
      margin-bottom: 0;
      margin-left: 0;
      margin-right: var(--space-l);
  }

  .route-cv__personal-information {
    flex-direction: row;
    text-align: left;
  }

  .route-cv__panel {
    flex-direction: row;
  }

  .route-cv__panel-label {
    width: 25%;
  }

  .route-cv__panel-container {
    width: 75%;
  }

  .route-cv__avatar {
    max-width: 10rem;
  }
}
</style>
