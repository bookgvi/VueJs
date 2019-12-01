<template>
  <div class="">
    <form
      @submit.prevent="loadDashboard"
      @keyup.enter="loadDashboard"
      class="form">
        <div class="form_col">
          <label for="email">
            Your email:
          </label>
          <input id="email" type="email" v-model="usersAuth.email" placeholder="email">
          <label for="pass">
              Your password:
          </label>
          <input id="pass" type="password" v-model="usersAuth.pass" placeholder="password">
          <p v-if="authError.isError" class="error">{{ authError.err }}</p>
        </div>
        <button :class="isBtn">Sign In</button>
    </form>
  </div>
</template>

<script>
import { firebaseApp } from '../firebase'
export default {
  data: () => ({
    usersAuth: {
      email: '',
      pass: ''
    },
    authError: {
      isError: false,
      err: ''
    },
    isBtn: {
      btn: true,
      btnHover: false
    }
  }),
  methods: {
    loadDashboard () {
      this.isBtn.btnHover = true
      setTimeout(() => {
        this.isBtn.btnHover = false
      }, 300)
      firebaseApp.auth().signInWithEmailAndPassword(this.usersAuth.email, this.usersAuth.pass)
        .catch((err) => {
          this.authError.err = err.message
          this.authError.isError = true
        })
    }
  }
}
</script>

<style scoped>
</style>
