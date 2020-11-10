<template>
  <div class="home">
    <h1>
      {{ titulo }}<span>{{ subtitulo }}</span>
    </h1>
    <p>
        <div v-if="loaded">
          Loading...
        </div>
        <div v-else>
          <span v-for="r in repos" :key="r.id">
            <a :href="r.html_url">
              {{ r.name }}
            </a>
          </span>
        </div>
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
      loaded: false
    };
  },
  props: {
    titulo: String,
  },
  mounted() {
    let url = "https://api.github.com/users/sistematico/repos?per_page=100";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let newData = {};
        // for (const item of data) {
        //   data.push(item);
        // }

        this.repos = data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
<style scoped>
</style>