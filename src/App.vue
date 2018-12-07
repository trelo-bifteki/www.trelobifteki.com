<script>
import 'reset-css';
import NavigationBar from '@/components/NavigationBar';
import SocialLinks from '@/components/SocialLinks';

export default {
  name: 'App',
  metaInfo: {
    title: 'CV',
    titleTemplate: '%s | Lampros Papadimitriou trelobifteki',
  },
  components: {
    NavigationBar,
    SocialLinks,
  },
};
</script>

<template>
  <div
    id="app"
    class="app"
  >
    <header class="header">
      <div class="header__container">
        <NavigationBar></NavigationBar>
        <div class="header__title">
          Lampros Papadimitriou
        </div>
        <div class="header__logo">
        </div>
      </div>
    </header>
    <div class="index__container">
      <router-view/>
    </div>
    <div  class="app__filler">
    </div>
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

.header {
  align-items: center;
  background: $color-header-background;
  color: $color-header-foreground;
  padding: 0 $space-xl;
}

.header__logo {
  margin-left: $space;
  height: $space-xxl;
}

.header__logo-image {
  border-radius: 50%;
  max-height: 100%;
  max-width: 100%;
}

.header__container {
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
  padding-left: 1rem;
}

.header__title {
  flex-grow: 1;
  font-size: 120%;
  text-align: right;
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
  .header__title {
    display: none;
  }

  .header__logo {
    display: none;
  }

  .footer__container {
    flex-direction: column;
  }

  .footer__footnote {
    flex-direction: column;
    margin-bottom: $space;
  }
}

@include media-breakpoint-medium {
  .header {
    padding: 0;
  }

  .header__container {
    padding-left: 0;
  }

}

</style>
