<template>
  <div>
  <h1>List</h1>
  <input type="text" class="" v-model="searchName">
  <ul>
    <li v-for="name in filterName">{{name}}</li>
  </ul>
  </div>

</template>

<script>
  import ListMixin from "../ListMixin";
  export default{
      data(){
          return {
              arrName: ['John', 'Bob', 'Lisa', 'Barbara'],
          }
      },
      mixins: [ListMixin],
  }
</script>
