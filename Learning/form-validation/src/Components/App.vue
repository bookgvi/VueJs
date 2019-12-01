<template>
  <div id="app" class="container">
    <h2 class="mt-4">Holly Vue!</h2>
    <form @submit.prevent="hSubmit">
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" class="form-control"
             :class="{'is-invalid': $v.email.$error}"
        @blur="$v.email.$touch()"
        v-model="email">
      <div class="invalid-feedback" v-if="!$v.email.email">Please provide a valid email.</div>
      <div class="invalid-feedback" v-if="!$v.email.uniqEmail">Email must be an unique.</div>
    </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" class="form-control"
               :class="{'is-invalid': $v.password.$error}"
               @blur="$v.password.$touch()"
               v-model="password">
        <div class="invalid-feedback" v-if="!$v.password.minLength">Must be over {{$v.password.$params.minLength.min}} symbols.</div>
        <div class="invalid-feedback" v-if="!$v.password.sameAs">Please Confirm this password.</div>
      </div>

      <div class="form-group">
        <label for="confirmPassword">Confirm password</label>
        <input type="password" id="confirmPassword" class="form-control"
               :class="{'is-invalid': $v.confirmPassword.$error}"
               @blur="$v.confirmPassword.$touch()"
               v-model="confirmPassword">
        <div class="invalid-feedback">Must be the same.</div>
      </div>

      <button class="btn btn-success" type="submit"
              :disabled="$v.$invalid"
      >Submit</button>
    </form>
  </div>
</template>

<script>
  import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'
  export default{
      data() {
          return {
              email: '',
              password: '',
              confirmPassword: '',
          }
      },
      methods: {
          hSubmit(){
              console.log(this.email, this.password);
          }
      },
      validations: {
          email: {
              required,
              email,
              uniqEmail: newEmail => {
                  if(!newEmail) return true;
                  return new Promise((resolve, reject) => {
                      let value = newEmail!=='test@mail.ru';
                      setTimeout(() => {
                          resolve(value);
                      }, 1000);
                  });
              }
          },
          password: {
              minLength: minLength(6),
              required,
              sameAs: sameAs('confirmPassword')
          },
          confirmPassword: {
              sameAs: sameAs('password')
          }
      }
  }
</script>
