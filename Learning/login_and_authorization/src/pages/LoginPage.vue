<template lang="pug">
  q-page.flex.flex-center.q-pa-xl
    login-form
</template>

<script>
import LoginForm from '../components/LoginForm'
export default {
  name: 'PageIndex',
  components: { LoginForm },
  modules: {
    LoginForm
  }
}
</script>

<style>
</style>
