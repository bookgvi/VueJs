<template>
  <div id="app" class="container">
      <div class="row">
        <film-card class="film-card"
          v-for="(item, index) in 19"
          :key="index"
          :filmPoster = 'getFilmDetails.filmPoster200[item-1]'
          :filmTitle = 'getFilmDetails.filmTitle[item-1]'
          :id="item-1"
        />
      </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'

  import filmCard from "./filmCard";

  export default{
      components: {
          'film-card': filmCard,
      },
      data(){
          return {
          }
      },
      beforeRouteUpdate(to, from, next){
          this.fetchFilmsInfo();
          next();
      },
      computed: {
          ...mapGetters([
              'getFilmDetails',
          ]),
      },
      methods: {
          ...mapActions([
              'fetchFilmsInfo',
          ]),
      }
  }
</script>

<style scoped>
  .container{
    text-align: center;
  }
  .film-card{
    cursor: pointer;
  }
</style>
