<template>
  <div class="">
    <h2>
      This is Dashboard
      <button @click="isSignout">Sign Out</button>
      <modal-sign-out
        v-if="modalSignOut.isShow"
        :isShow='modalSignOut.isShow'
        @closeModal="closeModal"
        @signOut="signOut"
      />
    </h2>
  </div>
</template>

<script>
import { firebaseApp } from '../firebase'
import modalSignout from './modalSignout'
export default {
  data: () => ({
    modalSignOut: {
      isShow: false
    }
  }),
  components: {
    'modal-sign-out': modalSignout
  },
  methods: {
    isSignout () {
      this.modalSignOut.isShow = true
    },
    closeModal () {
      this.modalSignOut.isShow = false
    },
    signOut () {
      firebaseApp.auth().signOut()
    }
  }
}
</script>

<style scoped>

</style>
