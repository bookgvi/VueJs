<template>
  <div class="">
    <h2>
      This is Dashboard
      <button @click="isSignout" class="btn">Sign Out</button>
      <router-view />
    </h2>
  </div>
</template>

<script>
export default {
  methods: {
    isSignout () {
      this.$router.replace({name: 'logout'})
        .catch(() => {})
    }
  }
}
</script>

<style scoped>
  .btn {
    top: 15%;
    background-color: #ff0000;
    border: 2px solid #ff0000;
  }
  .btn:hover {
    border: 2px solid #a90042;
    cursor: pointer;
  }
</style>
