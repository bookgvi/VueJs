<template>
  <div id="app" class="container mt-5">
      <button class="btn1 btn btn-dark mb-2 mr-2" @click="changePage(-1)" v-if="btnPrevPageStatus">Prev</button>
      <button class="btn2 btn btn-dark mb-2" @click="changePage(1)" v-if="btnNextPageStatus">Next</button>
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
      mounted(){
          this.changePage(0);
          this.fetchFilmsInfo()
      },
      computed: {
          ...mapGetters([
              'getCurrentFilmPage',
              'getForwardBtnStatus',
              'getBackwardBtnStatus',
              'getTotalPages'
          ]),
          btnNextPageStatus() {
              if ('id' in this.$route.params) {
                  this.setForwardBtnStatus(false);
                  return this.getForwardBtnStatus;
              }
              if(this.getCurrentFilmPage+1>this.getTotalPages) this.setForwardBtnStatus(false);
              else this.setForwardBtnStatus(true);
              return this.getForwardBtnStatus;
          },
          btnPrevPageStatus() {
              if ('id' in this.$route.params) {
                  this.setBackwardBtnStatus(false);
                  return this.getBackwardBtnStatus;
              }

              if(this.getCurrentFilmPage-1<=0) this.setBackwardBtnStatus(false);
              else this.setBackwardBtnStatus(true);
              return this.getBackwardBtnStatus;
          },
      },
      methods: {
          ...mapActions([
              'fetchFilmsInfo',
              'setPage',
              'setForwardBtnStatus',
              'setBackwardBtnStatus',
          ]),
          changePage(i){
              this.setPage(i);
              this.$router.push('/page/'+ this.getCurrentFilmPage)
          }
      },
  }
</script>

<style scoped>
  .btn1{
    position:fixed;
    left: 2%;
    top: 5rem;
    z-index: 12;
  }
  .btn2{
    position:fixed;
    right: 2%;
    top: 5rem;
    z-index: 12;
  }
</style>
