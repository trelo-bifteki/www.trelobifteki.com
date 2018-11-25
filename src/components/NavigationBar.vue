<script>
export default {
  name: 'NavigationBar',
};
</script>

<template>
  <nav class="navigation-bar">
    <ul>
      <li>
      <router-link class="navigation-bar__home" to="/">
          <img class="logo" src="../assets/trelobifteki-small.png" alt="logo">
        </router-link>
      <li>
        <router-link
          to="/cv"
        >
          CV
        </router-link>
      </li>
      <li>
        <router-link
          to="/blog"
        >
          Blog
        </router-link>
      </li>
      <li><a>&nbsp;</a></li>
      <li><a>&nbsp;</a></li>
      <li><a>&nbsp;</a></li>
    </ul>
  </nav>
</template>

<style lang="scss">

@import "../assets/variables.scss";
@import "../scss/breakpoints";

.navigation-bar {
  ul {
    display: flex;
    flex-direction: row;
  }

  li {
    display: block;
    min-width: 5rem;
    text-align: center;
    transition: background 0.2s ease, transform 0.33s ease, min-width 0.33s ease-in-out;
    transform: skew(-20deg);  /* SKEW */

    &:first-child {
      background-color: pink;
    }

    &:nth-child(2) {
      background-color:  #459E42;
    }

    &:nth-child(3) {
      background-color: #F97C39;
    }

    &:nth-child(4) {
      background-color:  #F7C931;
    }

    &:nth-child(5) {
        background-color: #E52D98;
      }

      &:hover{
        min-width: 7rem;
      }
  }

  a {
    color: $color-black;
    display:block;
    padding: $space;
    text-decoration: none;
    font-size: $font-size-ml;
    transform: skew(20deg); /* INVERSE SKEW */
  }

  img {
    max-width: 100%;
    max-height: 3rem;
  }

  li:nth-child(6) {
    background-color: #BA2766;
  }

  .navigation-bar__home {
    padding: 0;
  }

  @include media-breakpoint-medium {
    li {
      transform: skew(0deg);
    }

    a {
      transform: skew(0deg);
    }

    img {
      transform: skewX(0deg);
    }

    nav {
      overflow: hidden;
    }
  }

  @include media-breakpoint-small {
    overflow: hidden;
  }
}
</style>
