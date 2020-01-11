<template>
  <div class="home">
    <div class="subMenu">
      <router-link to="hello">Hello</router-link> |
      <router-link to="blockclassic">Simple CSS</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'homeView'
}
</script>

<style scoped>
  .subMenu {
    background-color: #ededed;
    padding: 0 0 10px 0;
  }
</style>
