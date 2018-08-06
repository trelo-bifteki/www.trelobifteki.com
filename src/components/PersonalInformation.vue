<script>
import SocialLinks from './SocialLinks';

export default {
  name: 'PersonalInformation',
  components: {
    SocialLinks,
  },
  computed: {
    personalInfo() {
      return this.$store.state.personalInfo;
    },
  },
  mounted() {
    this.$store.dispatch('refreshPersonalInfo');
  },
};
</script>

<template>
  <section class="personal-information">
    <div class="personal-information__avatar">
      <img src="../assets/avatar-small.jpg"
        alt="avatar"
        class="personal-information__avatar-image">
    </div>

    <div class="personal-information__container">
      <h1 class="personal-information__fullname">
        {{ personalInfo.fullname }}
      </h1>

      <h2 class="personal-information__current-job">
        {{ personalInfo.title }} @ {{ personalInfo.currentCompany }}
      </h2>

      <p class="personal-information__location">
        <i class="icon-map"></i>
        Munich, Bavaria, Germany
      </p>

      <SocialLinks></SocialLinks>
    </div>
  </section>
</template>

<style scoped>

.personal-information {
  background-color: var(--color-theme-white);
  border-bottom: 1px solid var(--color-theme-orange);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--space-l);
  text-align: center;
}

.personal-information__avatar {
  margin-bottom: var(--space);
  margin-left: auto;
  margin-right: auto;
  width: 10rem;
  text-align: center;
}

.personal-information__avatar-image {
  border: 2px solid transparent;
  box-shadow: 2px 4px 12px 0px rgba(0,0,0,0.5);
  border-radius: 200px;
  max-width: 100%;
}

.personal-information__avatar-image:hover {
  animation: wigglewiggle 2s infinite;
}

@keyframes wigglewiggle {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(5deg);
  }
  75% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.personal-information__fullname {
  color: var(--color-theme-orange);
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-s);
  text-transform: uppercase;
}

.personal-information__current-job {
  color: #666;
  font-size: var(--font-size-ml);
  margin-bottom: var(--space);
  text-transform: uppercase;
}

.personal-information__container {
  flex-grow: 1;
  padding-top: 1rem;
}

.personal-information__location {
  color: #666;
  margin: var(--space) 0;
}

@media screen and (width >=768px) {

.personal-information {
  flex-direction: row;
  text-align: left;
}

  .personal-information__avatar {
    margin-bottom: 0;
    margin-left: 0;
    margin-right: var(--space-l);
  }

  .personal-information__container {
    max-width: 70rem;
    padding-top: 0;
    padding-left: var(--space-xl);
  }
}

</style>
