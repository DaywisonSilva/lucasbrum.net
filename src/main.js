import Vue from 'vue'
import App from './App.vue'
import Sobre from './Sobre.vue'
import ErrorPage from './404.vue'
import Home from './Home.vue'

const routes = {
  '/': Home,
  '/sobre': Sobre
}

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || ErrorPage
    }
  },
  render (h) { return h(this.ViewComponent) }
})