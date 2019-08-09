<template>
  <div class="container">
    <h3>Event Dashboard</h3>
    <button class="btn btn-danger btn-sm signout-btn"
      @click="signOut"
    >Sign Out</button>
    <hr>
    <Addevent />
    <hr>
      <div class="row">
        <Eventitem class="card col-sm-3 mt-1"
          v-for="(item, index) in this.$store.state.events"
          :event="item"
        />
      </div>
    <p>{{error.message}}</p>
  </div>
</template>

<script>
  import {firebaseApp, eventsRef} from '../firebaseApp'
  import {mapActions} from 'vuex'
  import Addevent from './Addevent'
  import Eventitem from './Eventitem'
  export default {
      data() {
          return {
              error: {
                  message: ''
              }
          }
      },
      components: {
          Addevent,
          Eventitem
      },
      mounted() {
          eventsRef.on('value', snap => {
              let events = [];
              snap.forEach(event => {
                  events.push(event.val())
              });
              this.setEvent(events);
          });
      },
      methods: {
          signOut() {
              this.getOut();
              firebaseApp.auth().signOut()
                  .catch(error => {this.error = error});
          },
          ...mapActions([
              'getOut',
              'setEvent'
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
