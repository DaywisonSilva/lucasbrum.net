<template>
  <div class="home">
    <h1>{{ titulo }}<span>{{ subtitulo }}</span></h1>
    <p>Em breve...</p>
  </div>
</template>
<script>
export default {
  name: 'inicio',
  data () {
    return {
      subtitulo: 'Desenvolvedor PHP & JavaScript'
    }
  },
  props: {
    titulo: String
  }
}
</script>
<style scoped>
</style>