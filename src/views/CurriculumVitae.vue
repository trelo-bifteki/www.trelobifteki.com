<script>
import { createNamespacedHelpers } from 'vuex';
import BioSummary from '@/components/BioSummary';
import EducationItem from '@/components/EducationItem';
import JobItem from '@/components/JobItem';
import PersonalInformation from '@/components/PersonalInformation';
import SkillItem from '@/components/SkillItem';

const {
  mapActions,
  mapGetters,
  mapState,
} = createNamespacedHelpers('cv');

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
    ...mapState({
      skills: state => state.skills,
      jobs: state => state.jobs,
      interests: state => state.interests,
      education: state => state.education,
      resume: state => state.resume,
    }),
    ...mapGetters([
      'basics',
    ]),
  },
  created() {
    this.refreshResume();
    this.refreshEducation();
    this.refreshInterests();
    this.refreshJobs();
    this.refreshPersonalInfo();
    this.refreshSkills();
  },
  methods: {
    ...mapActions([
      'refreshResume',
      'refreshEducation',
      'refreshInterests',
      'refreshJobs',
      'refreshPersonalInfo',
      'refreshSkills',
    ]),
  },
};
</script>

<template>
  <div class="route-cv">
    <PersonalInformation
      v-if="basics"
      :name="basics.name"
      :title="basics.label"
      company="Deutsche Apotheker- und Ärztebank"
    />

    <section class="route-cv__panel">
      <h2 class="route-cv__heading route-cv__panel-label">
        <i class="route-cv__icon icon-user" />
        Summary
      </h2>
      <article class="route-cv__panel-container route-cv__panel-container--padding">
        <BioSummary />
      </article>
    </section>

    <section class="route-cv__panel">
      <h2 class="route-cv__heading route-cv__panel-label">
        <i class="route-cv__icon icon-heart" />
        Interests
      </h2>

      <ul class="route-cv__interests route-cv__panel-container">
        <li
          v-for="(interest, index) in interests"
          :key="index"
          class="route-cv__interest"
        >
          <i class="route-cv__interest-icon icon-heart" />
          {{ interest }}
        </li>
      </ul>
    </section>

    <section class="route-cv__panel">
      <h2 class="route-cv__heading route-cv__panel-label">
        <i class="route-cv__icon icon-briefcase" />
        Work experience
      </h2>
      <div class="route-cv__jobs route-cv__panel-container">
        <JobItem
          v-for="(job, index) in jobs"
          :key="index"
          :job="job"
        />
      </div>
    </section>

    <section class="route-cv__panel">
      <h2 class="route-cv__heading route-cv__panel-label">
        <i class="route-cv__icon icon-graduation-cap" />
        Education
      </h2>
      <div class="route-cv__panel-container route-cv__panel-container--padding">
        <EducationItem
          v-for="(item, index) in education"
          :key="index"
          :item="item"
        />
      </div>
    </section>

    <section class="route-cv__panel">
      <h2 class="route-cv__heading route-cv__panel-label">
        <i class="route-cv__icon icon-star" />
        Skills
      </h2>
      <div class="route-cv__skills route-cv__panel-container">
        <SkillItem
          v-for="(skill, index) in skills"
          :key="index"
          :skill="skill"
        />
      </div>
    </section>

    <script type="application/ld+json">
      {
      "@context": "http://schema.org",
      "@type": "Person",
      "address": {
      "@type": "PostalAddress",
      "addressLocality": "Munich",
      "addressRegion": "CO",
      "postalCode": "81241",
      "streetAddress": "Gräfstr. 139"
      },
      "email": "mailto:lambrospd@gmail.com",
      "jobTitle": "Full-stack software developer",
      "name": "Lampros Papadimitriou",
      "gender": "male",
      "nationality": "Greek",
      "url": "https://www.trelobifteki.com",
      "sameAs" : [
      "https://github.com/trelo-bifteki",
      "https://www.linkedin.com/in/lampros-papadimitriou-85379b43",
      "https://twitter.com/trelobifteki"
      ]
      }
    </script>
  </div>
</template>

<style  lang="scss">

@import '../scss/variables';
@import '../scss/breakpoints';
@import '../scss/fluid';

.route-cv {
  font-size: $font-size-ml;

  &__heading {
    color: $color-theme-orange;
    font-size: $font-size-l;
    margin:$space;
  }


  &__icon {
    color: $color-theme-orange;
    margin-right: $space;
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

  &__panel {
    @include body-container;

    border-top: 1px solid $color-theme-gray-light;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:first-child {
      border-top: 0;
    }

    &__panel-label {
      width: auto;
    }
  }
}

.route-cv__panel-container {
  display: block;
}

.route-cv__panel-container--padding {
  padding: $space;
}

.route-cv__skills {
  padding: $space;
}

.route-cv__jobs {
  padding: $space;
}

.route-cv__summary-paragraph {
  margin-bottom: $space;
}

@include media-breakpoint-not-medium {
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
