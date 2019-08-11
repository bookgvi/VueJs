<template>
  <div id="app" class="container">
    <h2 class="mt-9">{{getFilmDetails.filmTitle}}</h2>
    <hr>
    <div class="">
      <button class="btn btn-dark mb-2 mr-2" @click="fetchFilmsInfo(-1)" v-if="getFilmDetails.previousFilmTitle">{{getFilmDetails.previousFilmTitle}}</button>
      <button class="btn btn-dark mb-2" @click="fetchFilmsInfo(1)" v-if="getFilmDetails.nextFilmTitle">{{getFilmDetails.nextFilmTitle}}</button>
      <div class="row">
        <div class="col-md">
          <img :src='getFilmDetails.filmPoster' alt="" >
        </div>
        <div class="col-md">
          {{getFilmDetails.filmOverview}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {mapGetters} from 'vuex'
  export default{
      data(){
          return {
          }
      },
        created() {
              this.fetchFilmsInfo(1);
          },
      computed: {
          ...mapGetters([
              'getFilmDetails'
          ]),
      },
      methods: {
          ...mapActions([
              'fetchFilmsInfo'
          ]),
      }
  }
</script>
