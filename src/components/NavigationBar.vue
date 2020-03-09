<script>
export default { name: 'NavigationBar', };
</script>

<template>
  <nav class="navigation-bar">
    <ul class="navigation-bar__container">
      <li class="navigation-bar__item">
        <router-link
          class="navigation-bar__link navigation-bar__link--home"
          qa-ref="navigation-menu-goto-home"
          to="/"
        >
          <img
            class="navigation-bar__logo"
            src="../assets/trelobifteki-small.png"
            alt="logo"
          >
        </router-link>
      </li>

      <li class="navigation-bar__item">
        <router-link
          class="navigation-bar__link"
          qa-ref="navigation-menu-goto-cv"
          to="/cv"
        >
          CV
        </router-link>
      </li>

      <li class="navigation-bar__item">
        <router-link
          class="navigation-bar__link"
          qa-ref="navigation-menu-goto-blog"
          to="/blog"
        >
          Blog
        </router-link>
      </li>

      <li class="navigation-bar__item">
        <router-link
          class="navigation-bar__link"
          qa-ref="navigation-menu-goto-projects"
          to="/projects"
        >
          Projects
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">

@import "../scss/variables";
@import "../scss/breakpoints";

.navigation-bar {
  &__container {
    display: flex;
    flex-direction: row;
    overflow: hidden;

    @include media-breakpoint-not-small {
      overflow: visible;
    }
  }

  &__item {
    align-items: center;
    display: flex;
    justify-content: center;
    min-width: 5rem;
    text-align: center;
    transition: background .2s ease, transform .33s ease, min-width .33s ease-in-out;

    &:first-child {
      background-color: pink;
    }

    &:nth-child(2) {
      background-color: #459E42;
    }

    &:nth-child(3) {
      background-color: #F97C39;
    }

    &:nth-child(4) {
      background-color: #F7C931;
    }

    &:nth-child(5) {
      background-color: #E52D98;
    }

    &:nth-child(6) {
      background-color: #BA2766;
    }

    &:hover{
      min-width: 7rem;
    }

    @include media-breakpoint-not-small {
      transform: skew(-20deg);  /* SKEW */
    }
  }

  &__link {
    color: $color-black;
    display: block;
    font-size: $font-size-ml;
    padding: $space;
    text-decoration: none;

    &--home {
      padding: 0;
    }

    @include media-breakpoint-not-small {
      transform: skew(20deg); /* INVERSE SKEW */
    }
  }

  &__logo {
    height: 3rem;
    max-width: 100%;
  }
}
</style>
