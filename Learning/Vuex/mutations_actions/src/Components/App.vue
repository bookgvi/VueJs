<template>
  <div id="app" class="container">
    <div class="row mt-5">
      <div class="col-sm-6">
        {{posts}}
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
      computed: mapState([
          'posts'
      ]),
  }
</script>
