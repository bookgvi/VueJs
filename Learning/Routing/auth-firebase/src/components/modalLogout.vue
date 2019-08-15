<template>
  <div>
    <div class="modal">
      <h4 class="modal__title">
        Are you sure?
      </h4>
      <div class="modal__btn-group">
        <button @click="signOut" class="class-button class-button_yes">Yes</button>
        <button @click="closeModal" class="class-button class-button_no">No</button>
      </div>
    </div>
    <div class="modalOverlay"></div>
  </div>
</template>

<script>
import { firebaseApp } from '../firebase'
export default {
  methods: {
    closeModal () {
      this.$router.go(-1)
    },
    signOut () {
      firebaseApp.auth().signOut()
    }
  }
}
</script>

<style scoped>
.modal {
  position: fixed;
  display: block;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  max-width: 80%;
  height: 100px;
  max-height: 80%;
  background-color: #fafafa;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  z-index: 1000;
}
.modal h4 {
  margin: 0;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%);
}
.modal .modal__btn-group {
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%);
}
.modal .class-button {
  border: none;
  padding: 5px 10px;
}
.modal .class-button.class-button_yes {
  color: #ffffff;
  background-color: #ff0000;
  border: 2px solid #ff0000;

}
.modal .class-button.class-button_yes:hover{
  border: 2px solid #710000;
  cursor: pointer;
}
.modal .class-button.class-button_no {
  color: #ffffff;
  background-color: #00cc00;
  border: 2px solid #00cc00;
}
.modal .class-button.class-button_no:hover{
  border: 2px solid #007100;
  cursor: pointer;
}

  .modalOverlay {
    position: fixed;
    background-color: rgba(0,0,0,0.07);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 990;
  }
</style>
