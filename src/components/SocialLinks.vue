<script>
export default {
  name: 'SocialLinks',
};
</script>

<template>
  <div class="social-links">
    <a
      class="social-links__item"
      href="https://github.com/trelo-bifteki"
       target="_blank"
       rel="noopener"
    >
      <i class="icon-github"></i>
    </a>
    <a
      class="social-links__item"
      href="https://www.linkedin.com/in/lampros-papadimitriou-85379b43"
      target="_blank"
      rel="noopener"
    >
      <i class="icon-linkedin-squared"></i>
    </a>
    <a
      href="https://twitter.com/trelobifteki"
      target="_blank"
      rel="noopener"
  >
      <i class="icon-twitter"></i>
    </a>
    <a href="tel:+491723990194">
      <i class="icon-whatsapp"></i>
    </a>
    <a href="mailto:lambrospd@gmail.com">
      <i class="icon-mail"></i>
    </a>
  </div>
</template>

<style lang="scss">

@import '../assets/variables.scss';

.social-links {
  & > a {
    border-radius: 50%;
    font-size: 110%;
    margin-right: $space;
    text-decoration: none;
    transition: background-color 0.33s ease-in-out;

    &:first-child {
      color: $color-rainbow-green;
    }

    &:nth-child(2) {
      color: $color-rainbow-yellow;
    }

    &:nth-child(3) {
      color: $color-rainbow-orange;
    }

    &:nth-child(4) {
      color: $color-rainbow-lila;
    }

    &:nth-child(5) {
      color: $color-rainbow-red;
    }

    &:first-child:hover {
      color: $color-rainbow-white;
      background-color: $color-rainbow-green;
    }

    &:nth-child(2):hover {
      color:  $color-rainbow-white;
      background-color: $color-rainbow-yellow;
    }

    &:nth-child(3):hover {
      color:  $color-rainbow-white;
      background-color: $color-rainbow-orange;
    }

    &:nth-child(4):hover {
      color:  $color-rainbow-white;
      background-color: $color-rainbow-lila;
    }

  }
}

@media screen and (max-width: $breakpoint-medium) {
  div {
    text-align: center;
  }
}
</style>
