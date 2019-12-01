<template>
  <div class="col-md"
      @click="filmDetail"
    >
      <img class='mb-2' :src='filmPoster'>
    <h6 class="card-title">{{filmTitle}}</h6>

    <router-view />
  </div>

</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
    export default {
        props: {
            filmTitle: String,
            filmPoster: String,
            id: Number,
        },
        computed:{
            ...mapGetters([
               'getFilmDetails'
            ]),
        },
        methods: {
            ...mapActions([
                'fetchFilmDetails',
            ]),
            filmDetail(){
                this.$router.push('/film/' + this.id)
            }
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
