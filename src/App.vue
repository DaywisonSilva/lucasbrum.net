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
            @click="switchTheme"
          ></i>
        </div>
        <router-view :subtitulo="subtitulo" />
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
import { darkMode } from "@/assets/js/darkmode";

export default {
  name: "App",
  data: function () {
    return {
      subtitulo: "Desenvolvedor PHP & JavaScript",
      dataTheme: "dark",
      darkMode: false,
    };
  },
  methods: {
    switchTheme: function (event) {
      // `this` dentro de métodos aponta para a instância Vue
      //alert('Olá ' + this.name + '!')
      // `event` é o evento DOM nativo

      this.darkMode = this.darkMode ? false : true;

      // darkMode
      //if (event) {
      //  alert(event.target.tagName)
      //}
    },
    mounted() {
      // set page title
      document.title = "Lucas Saliés Brum - WebDev";
      // set 'app-background' class to body tag
      let bodyElement = document.body;
      bodyElement.classList.add("app-background");
      // check for active theme
      let htmlElement = document.documentElement;
      let theme = localStorage.getItem("theme");
      if (theme === "dark") {
        htmlElement.setAttribute("theme", "dark");
        this.darkMode = true;
      } else {
        htmlElement.setAttribute("theme", "light");
        this.darkMode = false;
      }
    },
    watch: {
      darkMode: function () {
        // add/remove class to/from html tag
        let htmlElement = document.documentElement;
        if (this.darkMode) {
          localStorage.setItem("theme", "dark");
          htmlElement.setAttribute("theme", "dark");
        } else {
          localStorage.setItem("theme", "light");
          htmlElement.setAttribute("theme", "light");
        }
      },
    },
  },
};
</script>

<style>
@import "src/css/darkmode.css";

#app {
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>