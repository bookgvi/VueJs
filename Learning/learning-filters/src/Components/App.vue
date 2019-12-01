<template>
  <div id="app" class="container">
    <h2 class="mt-4">Holly Vue!</h2>
    <input type="text" class="" v-model="searchName">
    <ul>
      <li v-for="name in filterName">{{name}}</li>
    </ul>

    <app-list />
  </div>
</template>

<script>
  import ListMixin from '../ListMixin'
  export default {
      mixins: [ListMixin]
  }
</script>
