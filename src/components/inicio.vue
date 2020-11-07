<template>
  <div class="home">
    <h1>{{ titulo }}<span>{{ subtitulo }}</span></h1>
  </div>
</template>
<script>
export default {
  name: 'inicio',
  data () {
    return {
      titulo: 'Início'
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