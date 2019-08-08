<template>
  <div class="">
    <h6 class="card-text">{{posts[index].title}}</h6>
    <span class="card-text text-muted" >{{posts[index].author}}, {{posts[index].date}}</span>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
      props: ['index'],
      computed: {
          ...mapGetters([
              'posts'
          ])
      }
  }
</script>

<style scoped>
</style>
