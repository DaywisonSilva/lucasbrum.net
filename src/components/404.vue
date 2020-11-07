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
      titulo: 'Erro 404'
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