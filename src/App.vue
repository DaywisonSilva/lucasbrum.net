<template>
  <div id="app">
    <div class="container">
      <aside>
        <img class="logo" src="./assets/logo.png" alt="Lucas Saliés Brum">
      </aside>  
      <main>
        <router-view :subtitulo="subtitulo" />
        <ul>
          <li><router-link class="nav-link" to="/">Início</router-link></li>
          <li><router-link class="nav-link" to="/projetos">Projetos</router-link></li>
          <li><router-link class="nav-link" to="/contato">Contato</router-link></li>
        </ul>
      </main>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data: function() { 
    subtitulo: "PHP Developer" 
  }
}
</script>

<style>
@import 'https://fonts.googleapis.com/css2?family=Indie+Flower&family=Open+Sans&display=swap';
@import './assets/css/main.css';
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
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