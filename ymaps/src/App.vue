<template>
  <div id="app">
    <ymap></ymap>
  </div>
</template>

<script>
import ymap from './components/ymap.vue'

export default {
  name: 'app',
  components: {
    ymap
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
