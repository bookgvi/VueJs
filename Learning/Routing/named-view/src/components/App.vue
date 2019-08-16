<template>
  <div id="app" class="flex-container">
    <component-header />

    <router-view name="Content" />
    <router-view name="About" />
    <router-view name="Aside" />
    <router-view name="Footer" />

  </div>
</template>

<script>
  import Header from './Header'
export default {
  components: {
    'component-header': Header
  }
}
</script>

<style scoped>
  #app {
  }
</style>
