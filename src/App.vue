<template>
  <div id="app">
    <div class="container">
      <aside>
        <img class="logo" src="./assets/logo.png" alt="Lucas Saliés Brum">
      </aside>  
      <img src="./assets/logo.png">
      <router-view/>
      <ul>
        <li><router-link class="nav-link" to="/">Início</router-link></li>
        <li><router-link class="nav-link" to="/projetos">Projetos</router-link></li>
        <li><router-link class="nav-link" to="/contato">Contato</router-link></li>
      </ul>
    </div>
  </div>
</template>



        <div class="container">
            <aside>
                <img class="logo" src="img/logo.png" alt="Lucas Saliés Brum">
            </aside>   
            
            <main>
                <h1>{{ titulo }}<span>{{ subtitulo }}</span></h1>
                <ul>
                    <li><a :href="inicioURL">Início</a></li>
                    <li><a :href="projetosURL">Projetos</a></li>
                    <li><a :href="contatoURL">Contato</a></li>
                </ul>
            </main>
        </div>
   

<script>
export default {
  name: 'App'
}
</script>

<style>
@import 'https://fonts.googleapis.com/css2?family=Indie+Flower&family=Open+Sans&display=swap';
@import './assets/css/main.css';

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