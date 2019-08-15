<template>
  <div class="">
    <button @click="logout">LogOut</button>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$router.push('somepage/logout')
    }
  }
}
</script>

<style scoped>

</style>
