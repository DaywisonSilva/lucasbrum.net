<template>
  <div class="home">
    <h1>{{ titulo }}<span>{{ subtitulo }}</span></h1>
  </div>
</template>
<script>
export default {
  name: 'contato',
  data () {
    return {
      titulo: 'Contato'
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