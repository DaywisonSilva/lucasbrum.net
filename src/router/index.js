// Main
import Vue from 'vue'
import Router from 'vue-router'

// Seções
import inicio from '@/components/inicio'
import blog from '@/components/blog'
import services from '@/components/services'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: inicio
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    },
    {
      path: '/services',
      name: 'services',
      component: services
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
