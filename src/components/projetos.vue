<template>
  <div class="home">
    <h1>
      {{ titulo }}<span>{{ subtitulo }}</span>
    </h1>
    <p>Em breve...</p>
  </div>
</template>
<script>
export default {
  name: "projetos",
  data() {
    return {
      subtitulo: "Projetos",
    };
  },
  props: {
    titulo: String,
  },
  mounted() {
    let url = "https://api.github.com/users/sistematico/repos";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        for (const nome of data.name) {
          console.log(name);

        }
      })
      .catch(console.error);
  },
};
</script>
<style scoped>
</style>