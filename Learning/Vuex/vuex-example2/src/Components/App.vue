<template>
  <div id="app" class="container">
    <h2 class="mt-5">Holly Vue</h2>
    <hr>
      <h5 class="">{{showCounter}}</h5>
      <hr>
    <form>
    <div class="form-group row">
      <label for="timeout" class="col-form-label ml-2">Set timeout (ms): </label>
      <input type="text" class="form-control ml-2" id="timeout" v-model="payload.timeout">
      <label for="increment" class="col-form-label ml-2">Set timeout (ms): </label>
      <input type="text" class="form-control ml-2" id="increment" v-model="payload.incCount">

      <button class="btn btn-dark btn-sm ml-2" @click.prevent="incCounter(payload)">Increment</button>
    </div>
    </form>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'

  export default{
      data(){
          return {
              payload: {
                  timeout: 500,
                  incCount: 3,
              },
          }
      },
      computed: {
          ...mapGetters([
              'showCounter'
          ]),
      },
      methods: {
          ...mapActions([
              'incCounter'
          ]),
      }
  }
</script>

<style scoped>
  .form-control{
    width: 5rem;
  }
</style>
