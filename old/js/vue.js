// const router = new VueRouter({
//     mode: 'history'
// })

const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Lucas Saliés Brum',
        subtitulo: 'Desenvolvedor PHP & JavaScript',
        inicioURL: '/',
        projetosURL: '/projetos',
        contatoURL: '/contato',
        currentRoute: window.location.pathname
    },
    methods: {
        humanizeURL: function(url) {
            return url
                .replace(/^https?:\/\//, '')
                .replace(/\/$/, '')
        }
    }
})