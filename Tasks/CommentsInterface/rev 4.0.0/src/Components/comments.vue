<template>
  <div class="mb-3">
    <input type="text" class="card-text" :value="posts[index].title" :disabled="editable" ref="input"
      @input="chComment"
    />
    <div class="mb-3" v-if="btnVisible">
      <button class="btn btn-primary"
              @click="save"
      >Save</button>
      <button class="btn btn-outline-secondary"
              @click="cancel"
      >Cancel</button>
    </div>

    <span class="card-text text-muted" >{{posts[index].author}}, {{posts[index].date}}
        <span class="sub-menu"
          @click="subMenu"
        >&times;</span>
    </span>
        <sub-menu
          v-if="sMenuVisible"
          :index="index"
          @editComment="editComment"
          @deleteComment="deleteConfirm"
        />

    <delete-popup
      v-if="confirmPopup"
      @cancel="cancel"
      @confirm="confirm"
    />
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  import subMenu from './subMenu'
  import deletePopup from './delete-popup'
  export default {
      props: ['index'],
      data(){
          return {
              sMenuVisible: false,
              editable:  true,
              btnVisible: false,
              newComment: '',
              confirmPopup: false,
          }
      },
      computed: {
          ...mapGetters([
              'posts'
          ])
      },
      components: {
          'sub-menu': subMenu,
          'delete-popup': deletePopup,
      },
      methods: {
          subMenu(){
              this.sMenuVisible=!this.sMenuVisible;
          },
          editComment(){
            this.sMenuVisible = false;
            this.editable = false;
            this.btnVisible = true;
            this.$nextTick(() => this.$refs.input.focus());
          },
          cancel() {
              this.sMenuVisible = false;
              this.editable = true;
              this.btnVisible = false;
              this.confirmPopup = false;
          },
          save(){
              if(this.newComment)
                this.changeComment([this.index, this.newComment])
              this.cancel();
          },
          chComment(event){
              this.newComment = event.target.value;
          },
          deleteConfirm() {
              this.sMenuVisible = false;
              this.confirmPopup = true;
          },
          confirm(){
              this.deleteComment(this.index);
              this.cancel();
          },
          ...mapActions([
              'changeComment',
              'deleteComment'
          ]),
      },
  }
</script>

<style scoped>
  input, input:focus {
    display: block;
    background-color: #fff;
    outline: none;
    border: none;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 1.1em;
    color: #222222;
  }
  .sub-menu {
    cursor: pointer;
  }

  button {
    width: 30%;
  }
</style>
