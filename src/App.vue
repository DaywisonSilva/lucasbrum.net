<template>
  <div id="app">
    <div class="container">
      <aside>
        <img class="logo" src="./assets/logo.png" alt="Lucas Saliés Brum">
      </aside>  
      <main>
        <!-- <div class="lights"><i class="fas fa-sun"></i></div> -->
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
    return {
      subtitulo: 'Desenvolvedor PHP & JavaScript'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>