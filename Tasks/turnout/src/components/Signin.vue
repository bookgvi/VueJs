<template>
  <div class="">
    <h3>Sign In</h3>
    <div class="form-group" @keyup.enter="signIn">
      <input type="text" class="form-control" placeholder="email" v-model="email" />
      <input type="password" placeholder="password" class="form-control" v-model="password" />
      <br>
      <button class="btn btn-primary" @click="signIn">Sign In</button>
    </div>
    <router-link to="/signup">Not a user? Sign Up</router-link>
    <br>
    <p>{{error.message}}</p>
  </div>
</template>

<script>
  import {firebaseApp} from '../firebaseApp'
  export default{
      data() {
          return{
              email: '',
              password: '',
              error: {
                  message: ''
              },
          }
      },
      methods: {
          signIn() {
              firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
                  .catch(error => {
                      this.error = error;
                  });
          },
      }
  }
</script>
