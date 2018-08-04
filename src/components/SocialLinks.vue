<script>
export default {
  name: 'SocialLinks',
};
</script>

<template>
  <div class="social-links">
    <a href="https://github.com/trelo-bifteki" target="_blank" >
      <i class="icon-github"></i>
      trelo-bifteki
    </a>
    <a href="https://twitter.com/trelobifteki" target="_blank">
      <i class="icon-twitter"></i>
      trelobifteki
    </a>
    <a href="tel:+491723990194">
      <i class="icon-whatsapp"></i>
      +49 1723 990194
    </a>
    <a href="https://www.facebook.com/trelobifteki" target="_blank">
      <i class="icon-facebook-official"></i>
      trelobifteki
    </a>
  </div>
</template>

<style scoped>
div {
  align-items: center;
  display: flex;
  flex-direction: row;
}

 a {
   text-decoration: none;
   font-size: 110%;
   margin-right: 1rem;
 }

a:first-child {
  color: #459E42;
}
a:nth-child(2) {
  color: #F7C931;
}

a:nth-child(3) {
  color: #F97C39;
}

a:nth-child(4) {
  color: #E52D98;
}

a:nth-child(5) {
  color: #BA2766;
}

@media screen and (width < 768px) {
  div {
    flex-direction: column;
  }

  a {
    margin-bottom: 1rem;
  }

  a:last-child {
    margin-bottom: 0;
  }
}
</style>
