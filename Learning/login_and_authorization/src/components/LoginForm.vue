<template lang="pug">
  q-dialog(v-model="card" persistent)
    q-card.q-pa-lg
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
      .row
        q-btn.q-mt-sm.col(@click="enter" color="primary") Login
</template>

<script>
export default {
  name: 'LoginForm',
  data: () => ({
    card: '',
    login: '',
    password: ''
  }),
  methods: {
    enter () {
      this.$router.push('dashboard')
    }
  }
}
</script>

<style scoped>

</style>
