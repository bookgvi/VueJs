<template>
  <div id="app">
    <div class="container">
      <h2>Feedback form</h2>
      <form @submit.prevent="hSubmit">
        <div class="form-group">
          <label for="name">
            Enter your name:
          </label>
          <input id="name" type="text" v-model="name" placeholder="Your name" class="form-control">
        </div>
        <div class="form-group">
          <label for="tel">*Enter your phone number:</label>
          <input
            id="tel"
            v-mask="'+7 (###) ###-##-##'"
            type="text"
            v-model="$v.tel.$model"
            placeholder="+7 (000) 000-00-00"
            class="form-control"
          >
          <div class="error mb-2">
            <p v-if="!$v.tel.required">* This field are required</p>
            <p v-if="!$v.tel.minLength">* Incorrect phone format</p>
          </div>
          <div class="form-group">
            <label for="message">
              *Enter your message:
            </label>
            <textarea
              id="message"
              v-model="$v.message.$model"
              rows="3"
              placeholder="Your message"
              class="form-control"
            ></textarea>
            <div class="error mb-2">
              <p v-if="!$v.message.required">* This field must be filled in</p>
            </div>
          </div>
          <div class="form-group">
            <input id="allowCheck" type="checkbox" v-model="allowCheck">
            <label for="allowCheck">
              Private data access
            </label>
          </div>
          <div class="form-group">
            <button type="submit" v-if="allowCheck" :disabled="!btnSubmitStatus" class="btn btn-primary">Submit</button>
          </div>
          <div>
            <p v-if="btnSubmitStatus==='ERROR'" class="error">Please fill the form correctly</p>
            <p v-else-if="btnSubmitStatus==='PENDING'" class="form_pending">Pending... please wait</p>
            <p v-else-if="btnSubmitStatus==='OK'" class="form_ok">Thank you, for your submission</p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      name: '',
      tel: '',
      message: '',
      allowCheck: true,
      btnSubmitStatus: 'true'
    }
  },
  methods: {
    hSubmit () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.btnSubmitStatus = 'ERROR'
      } else {
        this.btnSubmitStatus = 'PENDING'
        if (!this.name) {
          this.name = 'anonymous'
        }
        setTimeout(() => {
          this.btnSubmitStatus = 'OK'
          this.name = ''
          this.tel = ''
          this.message = ''
        }, 3000)
      }
    }
  },
  validations: {
    tel: {
      required,
      minLength: minLength(18)
    },
    message: {
      required
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
  .error {
    color: #ff0000;
  }
  .form_pending {
    color: #aaaa00;
  }
  .form_ok {
    color: #00aa00;
  }
</style>
