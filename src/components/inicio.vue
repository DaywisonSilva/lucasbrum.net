<template>
  <div class="home">
    <h1>Início<span>{{ subtitulo }}</span></h1>
  </div>
</template>

<script>
export default {
  name: 'inicio',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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