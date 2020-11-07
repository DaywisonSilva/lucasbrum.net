<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>

  

  <ul>
    <li><router-link class="nav-link" to="/blog">Blog</router-link></li>
    <li><router-link class="nav-link" to="/blog">Blog</router-link></li>
    <li><router-link class="nav-link" to="/blog">Blog</router-link></li>
  </ul>

<li class="nav-item">
  <router-link class="nav-link" to="/services">Services</router-link>
 </li>
<li class="nav-item">
   <router-link class="nav-link" to="/contact">contact</router-link>
 </li>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>