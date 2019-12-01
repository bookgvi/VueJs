<template>
  <div class="container" @submit="sendForm">
    <form>
      <h2>
        Форма обратной связи
      </h2>
      <div class="form-group">
        <label for="name">Ваше имя: </label>
        <input
          id="name"
          v-model="name"
          type="text"
          placeholder="Имя"
          class="form-control mb-2"
        >
      </div>
      <div class="form-group">
        <label for="tel">Номер телефона: </label>
        <input
          id="tel"
          v-model="$v.tel.$model"
          v-mask="'+7 (###) ###-##-##'"
          type="text"
          placeholder="+7 (000) 000-00-00"
          class="form-control"
        >
        <div v-if="!$v.tel.required" class="error">
          * Поле обязательно для заполнения
        </div>
        <div v-if="!$v.tel.minLength" class="error">
          * Неверный формат номера
        </div>
      </div>
      <div class="form-group">
        <label for="message">Сообщение:</label>
        <textarea
          id="message"
          v-model="$v.message.$model"
          name="message"
          rows="3"
          placeholder="Текст сообщения"
          class="form-control"
        />
        <div v-if="!$v.message.required" class="error">
          * Поле обязательно для заполнения
        </div>
      </div>
      <div class="form-group form-check">
        <input id="allow-check" v-model="allowCheck" type="checkbox" class="form-check-input">
        <label for="allow-check">"Согласен на обработку персональных данных"</label>
      </div>
      <button v-if="allowCheck" type="submit" :disabled="!submitStatus" class="btn btn-primary">
        {{ submitBtnText }}
      </button>
    </form>
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
      submitBtnText: 'Отправить'
    }
  },
  computed: {
    submitStatus () {
      return this.$v.tel.required & this.$v.tel.minLength & this.$v.message.required //  all fields must be filled in
    }
  },
  methods: {
    sendForm () {
      this.submitBtnText = 'Отправка...' // preparing to submit the form
      if (!this.name) {
        this.name = 'anonymous'
      }
      setTimeout(() => { //  simulate form  submission
        this.submitBtnText = 'Отправить'
      }, 2000)
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

<style scoped>
.error {
  color: #ff0000;
}
</style>
