<template>
  <div id="app" class="container">
    <div class="row mt-5">
      <div class="col-sm-5 card">
        <h3 class="card-title" >Подумать</h3>
        <h5 class="card-subtitle">Продавец</h5>
        <add-comment />
        <div  v-for="index in postsCount">
          <comments :index="index-1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import comments from './comments'
  import addComment from './addComment'
  import {mapGetters} from 'vuex'
  export default{
      components: {
          comments,
          'add-comment': addComment,
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
    border-left: 5px solid #00ac00;
    padding-left: 1em;
  }

  .card {
    border: none;
  }

  .card-title, .card-subtitle {
    color: #00ac00;
  }
</style>
