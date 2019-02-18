<script>
import 'reset-css';
import MainFooter from '@/components/MainFooter';
import MainHeader from '@/components/MainHeader';
import SocialLinks from '@/components/SocialLinks';

export default {
  name: 'App',
  metaInfo: {
    title: 'CV',
    titleTemplate: '%s | Lampros Papadimitriou trelobifteki',
  },
  components: {
    MainFooter,
    MainHeader,
    SocialLinks,
  },
};
</script>

<template>
  <div
    id="app"
    class="app"
  >
    <MainHeader />
    <div class="index__container">
      <router-view/>
    </div>
    <div  class="app__filler">
    </div>
    <MainFooter />
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__footnote">
          <div>
            Made with
            <i class="footer__heart icon-heart"></i>
          </div>
          <div>
            Wanna check code? Visit
            <a
               class="link__github"
               href="https://github.com/trelo-bifteki/www.trelobifteki.com"
               rel="noreferrer"
            >
              <i class="icon-github"></i>
            </a>
          </div>
        </div>
        <SocialLinks></SocialLinks>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">

@import 'assets/common.css';
@import 'assets/button.css';
@import 'assets/blog-content.css';
@import 'scss/breakpoints';
@import 'scss/variables';

html,
body {
  background-color: $color-white;
  color: $color-gray-darkest;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  font-size: 100%;
}

*, *:before, *:after {
  box-sizing: border-box;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__filler {
    flex: 1 1 auto;
  }
}

.footer {
  background: $color-header-background;
  color: $color-header-foreground;
  display: block;
  padding: $space;
}

.footer__container {
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
}

.footer__footnote {
  display: flex;
  flex-direction: row;
  flex-grow: 1;
}

.footer__heart {
  color: $color-theme-red
}

.link__github {
  color: $color-theme-orange;
}

@include media-breakpoint-small {
  .footer__container {
    flex-direction: column;
  }

  .footer__footnote {
    flex-direction: column;
    margin-bottom: $space;
  }
}

</style>
