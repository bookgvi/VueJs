<template>
  <div id="app" class="container mt-5">
    <div class="card">
      <div class="card-body">
        <div class="row">
          <calc-numbers
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Numbers from './numbers'
    export default {
      components: {
          'calc-numbers': Numbers
      },
  }
</script>

<style scoped>
  .card {
    text-align: center;
    width: 13rem;
  }
</style>
