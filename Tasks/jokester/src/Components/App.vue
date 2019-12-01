<template>
    <div id="app">
      <h3>Get jokes?</h3>
      <button class="btn btn-primary" @click='initJokes'>Get Data</button>
      <div>
        {{$store.state}}
      </div>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
      methods: mapActions([
          'initJokes'
      ])
  }
</script>
