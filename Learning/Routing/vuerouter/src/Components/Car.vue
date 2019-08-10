<template>
  <div class="">
    <h2>Car id {{id}}</h2>
    <button class="btn btn-sm btn-default"
      @click="backToCars"
    >Back</button>
    <router-link tag="button" class="btn btn-info"
      :to="{name: 'Carinfo', params: {id}, query: {name: 'BMW', year: 200+id}}"
    >Car info</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
      data(){
          return {
              id: this.$route.params.id
          }
      },
      watch: {
          '$route': 'changePage'
      },
      methods: {
            changePage(){
                this.id = this.$route.params.id;
            },
            backToCars(){
                this.$router.push('/cars')
            }
      }
  }
</script>
