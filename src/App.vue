<template>
  <div id="app">
    <div class="container">
      <aside>
        <img class="logo" src="./assets/logo.png" alt="Lucas Saliés Brum" />
      </aside>
      <main>
        <div class="lights">
          <i
            :class="[darkMode ? 'fas fa-moon' : 'fas fa-sun']"
            @click="darkSwitch()"
          ></i>
        </div>
        <router-view :titulo="titulo" />
        <ul>
          <li><router-link class="nav-link" to="/">Início</router-link></li>
          <li>
            <router-link class="nav-link" to="/projetos">Projetos</router-link>
          </li>
          <li>
            <router-link class="nav-link" to="/contato">Contato</router-link>
          </li>
        </ul>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      titulo: 'Lucas Saliés Brum',
      subtitulo: 'Desenvolvedor PHP & JavaScript',
      darkMode: false
    };
  },
  methods: {
    darkSwitch: function () {
      if (this.darkMode) {
        localStorage.theme = 'light';
        document.documentElement.setAttribute('data-theme', 'light');
        this.darkMode = false;
      } else {
        localStorage.theme = 'dark';
        document.documentElement.setAttribute('data-theme', 'dark');
        this.darkMode = true;
      }
    }
  },
  mounted() {
    document.title = "Lucas Saliés Brum - WebDev"
    //this.darkSwitch();

    if (localStorage.theme && localStorage.theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      this.darkMode = true;
    }
  },
  watch: {
    darkSwitch: function () {
      this.darkMode = localStorage.theme === 'dark' ? true : false;
    }
  }
}
</script>

<style>
/* @import "./assets/css/darkmode.css"; */

#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>