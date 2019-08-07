<template>
  <div id="app">
    Holly Vuex! {{$store.state.counter}}
  </div>
</template>

<script>
  export default {
      data() {
          return {
              counter: this.$store.state.counter,
          }
      },
      computed: {
          increment() {
              return this.$store.commit('INCREMENT')
          },
      },
  }
</script>
