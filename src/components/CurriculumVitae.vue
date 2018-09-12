<script>
import BioSummary from './BioSummary';
import EducationItem from './EducationItem';
import JobItem from './JobItem';
import PersonalInformation from './PersonalInformation';
import SkillItem from './SkillItem';

export default {
  name: 'CurriculumVitae',
  components: {
    BioSummary,
    EducationItem,
    JobItem,
    PersonalInformation,
    SkillItem,
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
    <PersonalInformation></PersonalInformation>

    <section class="route-cv__panel">
      <h2 class="route-cv__heading route-cv__panel-label">
        <i class="route-cv__icon icon-user"></i>
        Summary
      </h2>
      <article class="route-cv__panel-container route-cv__panel-container--padding">
          <BioSummary></BioSummary>
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
        Skills
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

<style  lang="scss">

@import '../assets/variables.scss';

.route-cv {
  font-size: 1.15rem;

  &__heading {
    color: $color-theme-orange;
    font-size: $font-size-l;
    margin:$space;
  }

  &__interests {
    flex-grow: 1;
    list-style-type: disc;
    margin: $space $space $space 0;
    padding: 0;
  }

  &__interest {
    list-style-type: none;
    padding: $space;
  }

  &__interest-icon {
    color: $color-theme-red;
    margin-right: $space-s;
  }
}

.route-cv__icon {
  color: var(--color-theme-orange);
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

  &:first-child {
    border-top: 0;
  }

  &__panel-label {
    width: auto;
  }
}

.route-cv__panel-container {
  display: block;
}

.route-cv__panel-container--padding {
  padding: var(--space);
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

@media screen and (min-width: 768px)  {
  .route-cv__panel {
    flex-direction: row;
  }

  .route-cv__panel-label {
    width: 25%;
  }

  .route-cv__panel-container {
    width: 75%;
  }
}
</style>
