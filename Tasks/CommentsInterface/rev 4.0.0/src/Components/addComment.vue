<template>
  <div class="x">
    <input type="text" class="mt-2 mb-2" v-model="newText" placeholder="Comments..."
      @click="btnVisible = true"
    />
    <div class="mb-3" v-if="btnVisible">
      <button class="btn btn-primary"
        @click="save"
      >Save</button>
      <button class="btn btn-outline-secondary"
        @click="cancel"
      >Cancel</button>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
      data(){
          return {
              newText: '',
              btnVisible: false
          }
      },
      methods: {
          cancel(){
            this.newText = '';
            this.btnVisible = false;
          },
          save(){
              if(this.newText)
                this.addComment(this.newText);
              this.cancel();
          },
          ...mapActions([
              'addComment'
          ]),
      },
  }
</script>

<style scoped>
  input, input:active, input:focus {
    outline: none;
    border: 0;
    border-top: 1px solid #777777;
    border-bottom: 1px solid #777777;
    border-radius: 0px;
    width: 100%;
  }
  button {
    width: 30%;
  }
</style>
