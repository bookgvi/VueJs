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
  .btn1 {
    right: 100%;
    background-color: #ff005d;
    border: 2px solid #ff005d;
  }
  .btn1:hover {
    border: 2px solid #a90042;
    cursor: pointer;
  }
</style>
