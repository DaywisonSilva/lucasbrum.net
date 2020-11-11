<template>
  <div class="projects">
    <h1>
      {{ titulo }}<span>{{ subtitulo }}</span>
    </h1>
    <div class="loader" v-if="loaded === false"></div>
    <div v-else>
      <span v-for="r in repos" :key="r.id">
        <a :href="r.html_url">
          {{ r.name }}
        </a>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "projetos",
  data() {
    return {
      subtitulo: "Projetos",
      repos: {},
      loaded: false,
    };
  },
  props: {
    titulo: String,
  },
  methods: {
    // fetchRepos: function () {
    //   let url = "https://api.github.com/users/sistematico/repos?per_page=100";
    //   fetch(url)
    //     .then((response) => {
    //       this.loaded = true;
    //       return response.json();
    //     })
    //     .catch((error) => {
    //       this.loaded = true;
    //       console.error(error);
    //     });
    // },

    async loadRepos (url) {
      try {
        this.loaded = false
        const repos = await fetch(url).then(res => res.json())
        this.repos = repos
      } catch (err) {
        console.error(err)
      } finally {
        this.loaded = true
      }
    }
  },
  async mounted() {
    await this.loadRepos('https://api.github.com/users/sistematico/repos?per_page=100')
  },
};
</script>
<style scoped>
main div.projects div span a {
  font-size: .75em;
}
.loader {
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 0.5s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>