<template>
  <div class="col-md">
    <div class="card-body">
      <h6 class="card-title">{{filmTitle}}</h6>
      <img class='card-text' :src='filmPoster'>
    </div>
  </div>

</template>

<script>
    export default {
        props: {
            filmTitle: String,
            filmPoster: String,
        },
    }
</script>

<style scoped>
 .card-body{
  box-sizing: content-box;
  text-align: center;
  width: 200px;
}

  .card-title {
    height: 40px;
  }
</style>
