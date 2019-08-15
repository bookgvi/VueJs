<template>
  <div class="">
    <form
      @submit.prevent="submit"
      @keyp.enter="submit"
    >
      <label for="email">Your email: </label>
      <input id="email" type="email" v-model="usersAuth.email" placeholder="email">
      <label for="pass">Your password</label>
      <input id="pass" type="password" v-model="usersAuth.pass">
      <button type="submit">Sign In</button>
      <p v-if="authError.isError" class="error">{{ authError.err }}</p>
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
    }
  }),
  methods: {
    submit () {
      firebaseApp.auth().signInWithEmailAndPassword(this.usersAuth.email, this.usersAuth.pass)
        .catch((err) => {
          this.authError.err = err.message
          this.authError.isError = true
          console.error('Catched...', new Error(err.code))
        })
    }
  }
}
</script>

<style scoped>
.error {
  color: #ff0000;
}
</style>
