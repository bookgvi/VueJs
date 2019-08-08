<template>
  <div id="app" class="container">
    <div class="row mt-5">
      <div class="col-sm-5 card">
        <h3 class="card-title" >Подумать</h3>
        <h5 class="card-subtitle">Продавец</h5>
        <input type="text" class="mt-2 mb-2" value="" placeholder="Comments..."/>
        <div  v-for="index in postsCount">
          <comments :index="index-1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import comments from './comments'
  import {mapGetters} from 'vuex'
  export default{
      components: {
        comments,
      },
      computed: {
        ...mapGetters([
            'postsCount',
        ]),
      }
  }
</script>

<style scoped>
  .container {
    text-align: left;
  }

  input {
    outline: none;
    border: 0;
    border-top: 1px solid #777777;
    border-bottom: 1px solid #777777;
  }

  .card-title, .card-subtitle {
    color: #00ac00;
  }
</style>
