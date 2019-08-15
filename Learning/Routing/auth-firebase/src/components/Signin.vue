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
        <button class="btn">Sign In</button>
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
    loadDashboard () {
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
  .form {
    position: absolute;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 1rem;
    /*border: 1px solid #cfcfcf;*/
    padding: 15px;
    left: 50%;
    transform: translate(-50%);
    width: 90%;
  }
  .form_col {
    margin-bottom: 1rem;
    text-align: center;
  }
  input {
    border: 1px solid #cfcfcf;
    border-radius: 2px;
    height: 20px;
    padding: 5px;
    font-size: 1rem;
  }
  input:active input:focus {
    border: 1px solid #1a90d1;
  }
  .btn {
    position: absolute;
    color: #ffffff;
    background-color: #1a90d1;
    border: 2px solid #1a90d1;
    padding: 10px;
    border-radius: 1px;
    -webkit-border-radius: 1px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 1rem;
    left: 50%;
    transform: translate(-50%);
    -moz-transform: translate(-50%);
    -webkit-transform: translate(-50%);
  }
  .btn:hover {
    border: 2px solid #00008a;
    cursor: pointer;
  }
  .error {
    color: #ff0000;
  }
</style>
