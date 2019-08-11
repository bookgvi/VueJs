<template>
 <div class="row">
   <div class="col-md">

   </div>
   <div class="col-md">
     {{getFilmDetails.filmOverview[id]}}
   </div>
 </div>
</template>

<script>
  import {mapGetters} from 'vuex'
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
    }
</script>

<style scoped>

</style>
