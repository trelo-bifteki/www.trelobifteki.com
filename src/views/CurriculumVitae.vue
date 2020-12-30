<script lang="ts">

import {
  Component,
  Vue,
} from 'vue-property-decorator';


import {
  namespace,
} from 'vuex-class';

import BioSummary from '@/components/BioSummary.vue';
import EducationItem from '@/components/EducationItem.vue';
import IconBase from '@/components/icons/IconBase.vue';
import IconBriefcase from '@/components/icons/IconBriefcase.vue';
import IconGraduationCap from '@/components/icons/IconGraduationCap.vue';
import IconHeart from '@/components/icons/IconHeart.vue';
import IconStar from '@/components/icons/IconStar.vue';
import IconUser from '@/components/icons/IconUser.vue';
import JobItem from '@/components/JobItem.vue';
import PersonalInformation from '@/components/PersonalInformation.vue';
import SkillItem from '@/components/SkillItem.vue';
import {
  ResumeSchema,
} from '@kurone-kito/jsonresume-types';
import {
  CvSkill,
} from '@/store/cv/types';


const cv = namespace('cv');

@Component({
  components: {
    BioSummary,
    EducationItem,
    IconBase,
    IconBriefcase,
    IconGraduationCap,
    IconHeart,
    IconStar,
    IconUser,
    JobItem,
    PersonalInformation,
    SkillItem,
  },
})
export default class CurriculumVitae extends Vue {

  readonly mainIconSize: number = 20;

  @cv.State('skills')
  readonly skills!: ReadonlyArray<CvSkill>;

  @cv.Getter('basics')
  readonly basics!: any;

  @cv.Getter('education')
  readonly education!: any;

  @cv.Getter('interests')
  readonly interests!: ReadonlyArray<any>;

  @cv.Getter('latestWork')
  readonly latestWork!: any;

  @cv.Getter('location')
  readonly location!: any;

  @cv.Getter('work')
  readonly work!: any;

  @cv.Getter('profiles')
  readonly profiles!: ReadonlyArray<any>;

  @cv.Action('refreshResume')
  readonly refreshResume!: () => Promise<ResumeSchema>;

  @cv.Action('refreshSkills')
  readonly refreshSkills!: () => Promise<CvSkill>;

  async created(): Promise<void> {
    const promiseResume = this.refreshResume();
    const promiseSkills = this.refreshSkills();
    await Promise.all([ promiseResume, promiseSkills ]);
  }

}

</script>

<template>
  <div class="curriculum-vitae">
    <PersonalInformation
      v-if="basics"
      :name="basics.name"
      :title="basics.label"
      :company="latestWork.name"
      :location="location"
      :profiles="profiles"
    />

    <section class="curriculum-vitae__panel">
      <h2 class="curriculum-vitae__heading curriculum-vitae__panel-label">
        <icon-base
          class="curriculum-vitae__icon"
          icon-name="user"
          :height="mainIconSize"
          :width="mainIconSize"
        >
          <icon-user />
        </icon-base>
        Summary
      </h2>

      <article class="curriculum-vitae__panel-container">
        <BioSummary />
      </article>
    </section>

    <section class="curriculum-vitae__panel">
      <h2 class="curriculum-vitae__heading curriculum-vitae__panel-label">
        <icon-base
          class="curriculum-vitae__icon"
          icon-name="heart"
          :height="mainIconSize"
          :width="mainIconSize"
        >
          <icon-heart />
        </icon-base>
        Interests
      </h2>

      <ul
        class="curriculum-vitae__interests curriculum-vitae__panel-container"
        qa-ref="curriculum-vitae-interests"
      >
        <li
          v-for="interest in interests"
          :key="interest.name"
          class="curriculum-vitae__interest"
          qa-ref="curriculum-vitae-interest-item"
        >
          <icon-base
            class="curriculum-vitae__interest-icon"
            icon-name="heart"
          >
            <icon-heart />
          </icon-base>
          {{ interest.name }}
        </li>
      </ul>
    </section>

    <section class="curriculum-vitae__panel">
      <h2 class="curriculum-vitae__heading curriculum-vitae__panel-label">
        <icon-base
          class="curriculum-vitae__icon"
          icon-name="briefcase"
          :height="mainIconSize"
          :width="mainIconSize"
        >
          <icon-briefcase />
        </icon-base>
        Work experience
      </h2>
      <div class="curriculum-vitae__jobs curriculum-vitae__panel-container">
        <JobItem
          v-for="(entry, index) in work"
          :key="index"
          :job="entry"
          qa-ref="curriculum-vitae-job-item"
        />
      </div>
    </section>

    <section class="curriculum-vitae__panel">
      <h2 class="curriculum-vitae__heading curriculum-vitae__panel-label">
        <icon-base
          class="curriculum-vitae__icon"
          icon-name="education-cap"
          :height="mainIconSize"
          :width="mainIconSize"
        >
          <icon-graduation-cap />
        </icon-base>
        Education
      </h2>
      <div class="curriculum-vitae__panel-container">
        <EducationItem
          v-for="(educationItem, index) in education"
          :key="index"
          :item="educationItem"
        />
      </div>
    </section>

    <section class="curriculum-vitae__panel">
      <h2 class="curriculum-vitae__heading curriculum-vitae__panel-label">
        <icon-base
          class="curriculum-vitae__icon"
          icon-name="star"
          :height="mainIconSize"
          :width="mainIconSize"
        >
          <icon-star />
        </icon-base>
        Skills
      </h2>
      <div class="curriculum-vitae__skills curriculum-vitae__panel-container">
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

.curriculum-vitae {
  &__heading {
    color: $color-theme-orange;
    font-size: $font-size-l;
    margin: $space 0;
  }

  &__icon {
    color: $color-theme-orange;
    margin-right: $space-xs;
  }

  &__interests {
    flex-grow: 1;
    list-style-type: disc;
  }

  &__jobs {
    margin-bottom: $space;

    @include media-breakpoint-not-small {
      margin-bottom: 0;
    }
  }

  &__interest {
    list-style-type: none;
    padding: $space 0;

    &:first-child {
      padding-top: 0;
    }
  }

  &__interest-icon {
    color: $color-theme-red;
    margin: 0 $space-s 0 .2rem;
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

    @include media-breakpoint-not-small {
      flex-direction: row;
    }
  }

  &__panel-label {
    width: auto;

    @include media-breakpoint-not-small {
      width: 25%;
    }
  }

  &__panel-container {
    display: block;

    @include media-breakpoint-not-small {
      padding: $space 0;
      width: 75%;
    }
  }

  &__skills {
    padding-bottom: $space;
  }

  &__summary-paragraph {
    margin-bottom: $space;
  }

  @include media-breakpoint-not-small {
    font-size: $font-size-ml;
  }
}
</style>
