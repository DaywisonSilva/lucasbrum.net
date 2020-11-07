<template>
  <div class="home">
    <h1>{{ titulo }}<span>{{ subtitulo }}</span></h1>
    <p>Em breve...</p>
  </div>
</template>
<script>
export default {
  name: 'projetos',
  data () {
    return {
      titulo: 'Projetos'
    }
  },
  props: {
    subtitulo: String,
    default: ''
  }
}
</script>
<style scoped>
</style>