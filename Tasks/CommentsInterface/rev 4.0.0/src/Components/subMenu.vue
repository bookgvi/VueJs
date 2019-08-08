<template>
  <div class="container">
  <div class="row">
    <div class="col-sm-4">
      <button class="btn btn-primary"
        @click="$emit('editComment')"
      >Edit</button>
      <button class="btn btn-outline-danger"
        @click="$emit('deleteComment')"
      >Delete</button>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
      props: ['index'],
      data() {
          return {
          }
      },
      methods: {

      },
  }
</script>

<style scoped>
  .container{
    position: fixed;
    right: 0%;
  }

  button {
    width: 50%;
  }

  .btn-outline-danger {
    background-color: #fff;
    color: red;
  }
</style>
