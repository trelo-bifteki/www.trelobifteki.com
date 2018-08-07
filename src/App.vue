<script>
import NavigationBar from '@/components/NavigationBar';
import SocialLinks from './components/SocialLinks';

export default {
  name: 'App',
  components: {
    NavigationBar,
    SocialLinks,
  },
};
</script>

<template>
  <div id="app">
    <header class="header">
      <div class="header__container">
        <NavigationBar></NavigationBar>
        <div class="header__title">
          Lampros Papadimitriou
        </div>
      </div>
    </header>
    <div class="index__container">
      <router-view/>
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

<style>

@import 'reset-css';
@import 'assets/common.css';
@import 'assets/button.css';

html,
body {
  background-color: #FFF;
  color: #222;
  font-family:  system-ui,Helvetica, Arial, sans-serif;
  font-size: 100%;
}

*, *:before, *:after {
  box-sizing: border-box;
}

.header {
  align-items: center;
  background: #3C3F50;
  color: #F1F3FA;
  padding: 0 2rem;
}

.header__container {
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  max-width: 80rem;
}

.header__title {
  flex-grow: 1;
  font-size: 120%;
  text-align: right;
}

.footer {
  background: #3C3F50;
  color: #F1F3FA;
  display: block;
  padding: var(--space);
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
  color: var(--color-theme-red);
}

.link__github {
  color: var(--color-theme-orange);
}

@media screen and (width <= 576px) {
  .header__title {
    display: none;
  }

  .footer__container {
    flex-direction: column;
  }

  .footer__footnote {
    flex-direction: column;
    margin-bottom: 1rem;
  }
}

@media screen and (width <= 768px) {
  .header {
    padding: 0;
  }
}

</style>
