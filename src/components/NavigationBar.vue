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
          <img class="logo" src="../assets/trelobifteki-small.jpg" alt="logo">
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

<style scoped>

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
}

a {
  color: #3C3F50;
  display:block;
  text-decoration:none;
  padding: 1rem;
  font-size: 110%;
  transform: skew(20deg); /* INVERSE SKEW */
}

img {
  max-width: 100%;
  max-height: 3rem;
}

li:first-child {
  background-color: pink
}

li:first-child:hover {
  background-color: pink;
}

li:nth-child(2) {
  background-color:  #459E42;
}

li:nth-child(3) {
  background-color: #F97C39;
}

li:nth-child(4) {
  background-color:  #F7C931;
}

li:nth-child(5) {
  background-color: #E52D98;
}

li:nth-child(6) {
  background-color: #BA2766;
}

li:hover{
  min-width: 7rem;
}

.navigation-bar__home {
  padding: 0;
}

@media screen and (width < 768px) {
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
</style>
