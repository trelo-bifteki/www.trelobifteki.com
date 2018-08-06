<script>
export default {
  name: 'NavigationBar',
};
</script>

<template>
  <nav>
    <ul>
      <li>
        <router-link
          to="cv"
        >
          CV
        </router-link>
      </li>
      <li>
        <router-link
          to="blog"
        >
          <span>Blog</span>
        </router-link>
      </li>
      <li><a>&nbsp;</a></li>
      <li><a>&nbsp;</a></li>
      <li><a>&nbsp;</a></li>
    </ul>
  </nav>
</template>

<style scoped>

li {
  display:inline-block;
  min-width: 5rem;
  text-align: center;
  transition: background 0.2s;
  transform: skew(-20deg);  /* SKEW */
}

a {
  display:block;
  text-decoration:none;
  padding: 1rem;
  font-size: 110%;
  transform: skew(20deg); /* INVERSE SKEW */
}

li:first-child {
  background-color:  #459E42;
}

li:nth-child(2) {
  background-color: #F97C39;
}

li:nth-child(3) {
  background-color:  #F7C931;
}

li:nth-child(4) {
  background-color: #E52D98;
}

li:nth-child(5) {
  background-color: #BA2766;
}

li:hover{
  background:#ddd;
}
</style>
