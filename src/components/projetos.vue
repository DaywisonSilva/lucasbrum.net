<template>
  <div class="home">
    <h1>
      {{ titulo }}<span>{{ subtitulo }}</span>
    </h1>
    <p v-if="loaded === false"><div class="loader"></div></p>
    <p v-else>
      <span v-for="r in repos" :key="r.id">
        <a :href="r.html_url">
          {{ r.name }}
        </a>
      </span>
    </p>
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
  },
  mounted() {
    this.repos = this.fetchRepos();
    // let url = "https://api.github.com/users/sistematico/repos?per_page=100";
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     let newData = {};
    //     // for (const item of data) {
    //     //   data.push(item);
    //     // }

    //     this.repos = data;
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  },
};
</script>
<style scoped>
</style>