<script>
export default {
  name: 'SocialLinks',
};
</script>

<template>
  <div class="social-links">
    <a
      href="https://github.com/trelo-bifteki"
       target="_blank"
       rel="noopener"
    >
      <i class="icon-github"></i>
    </a>
    <a
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

<style scoped>
div {
  display: block;
}

 a {
   text-decoration: none;
   font-size: 110%;
   margin-right: 1rem;
 }

 a:hover {
   text-decoration: underline;
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

@media screen and (max-width<= 768px) {
  div {
    text-align: center;
  }
}
</style>
