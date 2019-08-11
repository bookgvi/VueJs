<template>
  <div id="app" class="container mt-5">
    <div class="btns">
      <button class="btn btn-light mb-2 mr-2" @click="changePage(-1)" v-if="btnPrevPageStatus">Prev</button>
      <button class="btn btn-light mb-2" @click="changePage(1)" v-if="btnNextPageStatus">Next</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  export default {
      data(){
          return {
          }
      },
      computed: {
          ...mapGetters([
              'getCurrentFilmPage',
          ]),
          btnNextPageStatus() {
              return this.getCurrentFilmPage+1;
          },
          btnPrevPageStatus() {
              return this.getCurrentFilmPage-1;
          },
      },
      methods: {
          ...mapActions([
              'fetchFilmsInfo',
              'setPage'
          ]),
          changePage(i){
              this.setPage(i);
              this.$router.push('/page/'+ this.getCurrentFilmPage)
          }
      },
  }
</script>

<style scoped>
  .btns{
    text-align: center
  }
</style>
