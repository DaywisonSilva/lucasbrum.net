import Vue from 'vue'
import App from './App.vue'

const NotFound = { template: '<p>Página não encontrada</p>' }
const Home = { template: '<p>Página Inicial</p>' }
const About = { template: '<p>Sobre</p>' }

const routes = {
  '/': Home,
  '/sobre': About
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(App) }
//   render (h) { return h(this.ViewComponent) }
})