<template>
  <div class="home">
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
    fetchRepos: function () {
      let url = "https://api.github.com/users/sistematico/repos?per_page=100";
      fetch(url)
        .then((response) => {
          this.loaded = true;
          return response.json();
        })
        .catch((error) => {
          this.loaded = true;
          console.error(error);
        });
    },

    async loadRepos (url) {
      try {
        this.loaded = false

        const repos = await fetch(url)
        this.repos = repos.json()
      } catch (err) {
        console.error(err)
      } finally {
        this.loaded = true
      }
    }
  },
  async mounted() {
    await this.loadRepos('https://api.github.com/users/sistematico/repos?per_page=100')
    //this.repos = this.fetchRepos();
  },
};
</script>
<style scoped>
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>