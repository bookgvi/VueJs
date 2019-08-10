<template>
  <div class="">
    <h2>Car id {{id}}</h2>
    <button class="btn btn-sm btn-default"
      @click="backToCars"
    >Back</button>
    <router-link tag="button" class="btn btn-info"
      :to="{name: 'Carinfo',
            params: {id},
            query: {name: carModels[id-1], year: 201+id}}"
    >Car info</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default{
      data(){
          return {
              id: this.$route.params.id,
              carModels: ['BMW','Mercedes','Toyota','Dodge','Bentley'],
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
      },
      beforeRouteLeave(to, fromR, next){
          const answer = window.confirm('Are you sure?');
          if(answer) next();
          else next(false);
      },
  }
</script>
