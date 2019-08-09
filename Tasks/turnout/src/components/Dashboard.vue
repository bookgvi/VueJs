<template>
  <div class="">
    <h3>Event Dashboard</h3>
    <button class="btn btn-danger btn-sm signout-btn"
      @click="signOut"
    >Sign Out</button>
    <hr>
    <Addevent />
    <hr>
    {{$store.state}}
    <p>{{error.message}}</p>
  </div>
</template>

<script>
  import {firebaseApp} from '../firebaseApp'
  import {mapActions} from 'vuex'
  import Addevent from './Addevent'
  export default {
      data() {
          return {
              error: {
                  message: ''
              }
          }
      },
      components: {
          Addevent
      },
      methods: {
          signOut() {
              this.getOut();
              firebaseApp.auth().signOut()
                  .catch(error => {this.error = error});
          },
          ...mapActions([
              'getOut'
          ]),
      }
  }
</script>

<style scoped>
  .signout-btn{
    position: absolute;
    text-align: right;
    top: 60px;
    right: 40px;
  }

</style>
