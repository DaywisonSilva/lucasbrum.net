<template>
  <div class="home">
    <h1>
      {{ titulo }}<span>{{ subtitulo }}</span>
    </h1>
    <p>      
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
      repos: []
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
        console.log(typeof newData);

        for (const item of data) {
          console.log(item);
        }

        this.repos = data;
      })
      .catch(console.error);
  },
};
</script>
<style scoped>
</style>