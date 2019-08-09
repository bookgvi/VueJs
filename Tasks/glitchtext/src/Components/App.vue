<template>
  <div id="app">
    <h1>This is an example text</h1>
    <glitch-text />
    <button>Get a text</button>
  </div>
</template>

<script>
  import Glitchtext from './Glitchtext'
  export default{
    components: {
        'glitch-text': Glitchtext,
    },
  }
</script>

<style scope>
  #app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    margin-top: 3rem;
    text-align-last: center;
  }
</style>
