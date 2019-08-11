<template>
 <div class="row">
   <div class="col-m-5">
     <img :src="getFilmDetails.filmPoster500[id]" alt="">
   </div>
   <div class="col-md-6">
     {{getFilmDetails.filmOverview[id]}}
   </div>
 </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
    export default {
        name: "filmDetails",
        data(){
            return{
                id: this.$route.params.id,
            }
        },
        computed:{
            ...mapGetters([
                'getFilmDetails'
            ]),
        },
        methods: {
            ...mapActions([
                'setForwardBtnStatus',
                'setBackwardBtnStatus'
            ]),
        },
    }
</script>

<style scoped>
  .row {
    text-align: center;
  }
</style>
