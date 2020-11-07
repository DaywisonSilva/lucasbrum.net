// Main
import Vue from 'vue'
import Router from 'vue-router'

// Seções
import inicio from '@/components/inicio'
import blog from '@/components/blog'
import projetos from '@/components/projetos'
import contato from '@/components/contato'

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
      path: '/projetos',
      name: 'projetos',
      component: projetos
    },
    {
      path: '/contato',
      name: 'contato',
      component: contato
    }
  ]
})
