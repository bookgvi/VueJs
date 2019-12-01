<template>
  <div class="form-group">
    <input class="form-control mb-1" type="text" v-model="current" placeholder="0">

    <button class="btn btn-primary"
      @click=math
    >+</button>
    <button class="btn btn-primary"
      @click="sub(current)"
    >-</button>
    <button class="btn btn-primary"
      @click="mul(current)"
    >*</button>
    <button class="btn btn-primary"
      @click="div(current)"
    >/</button>
    <button class="btn btn-secondary"
            @click="current=showResult"
    >=</button>
    <button class="btn btn-danger"
      @click="clearAll"
    >AC</button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  export default{
      props: ['index'],
      data(){
          return {
              current: 0,
              math: this.sum
          }
      },
      computed: mapGetters([
          'showResult'
      ]),
      methods: {
          ...mapActions([
              'sum',
              'sub',
              'mul',
              'div',
              'clear'
          ]),
          clearAll(){
              this.current = 0;
              this.clear();
          },
      },
  }
</script>

<style scoped>

</style>
