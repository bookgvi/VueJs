<template lang="pug">
  q-form
    q-input(
      v-model="login"
      placeholder="Login"
      label="Login"
      clearable
      outlined
      dense
    )
    q-input.q-mt-xs(
      v-model="password"
      type="password"
      placeholder="Password"
      label="Password"
      clearable
      outlined
      dense
    )
    q-btn.q-mt-sm.q-ml-sm(@click="submit" color="primary") Login
    q-btn.q-mt-sm.q-ml-sm(@click="cancel") Cancel
</template>

<script>
export default {
  name: 'LoginForm',
  data: () => ({
    login: '',
    password: ''
  }),
  methods: {
    submit () {},
    cancel () {
      this.login = ''
      this.password = ''
    }
  }
}
</script>

<style scoped>

</style>
