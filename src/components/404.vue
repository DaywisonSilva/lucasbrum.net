<template>
  <div class="home">
    <h1>{{ titulo }}<span>{{ subtitulo }}</span></h1>
  </div>
</template>
<script>
export default {
  name: 'notfound',
  data () {
    return {
      subtitulo: 'Erro 404'
    }
  },
  props: {
    titulo: String
  }
}
</script>
<style scoped>
</style>