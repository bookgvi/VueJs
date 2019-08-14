<template>
  <div id="app">
    <div class="container">
      <h2 class="mt-3">Holly Vue!</h2>
      <form @submit.prevent="createCar">
        <div class="form-group">
          <label for="carName">
            Car name
          </label>
          <input id="carName" name="carName" type="text" v-model.trim="carName" class="form-control">
        </div>
        <div class="form-group">
          <label for="carYear">
            Car year
          </label>
          <input id="carYear" name="carYear" type="text" v-model.number="carYear" class="form-control">
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-success">Create car</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      carName: '',
      carYear: '2019'
    }
  },
  methods: {
    async createCar (event) {
      console.dir(this.$http)
      let newCar = {
        name: this.carName,
        year: this.carYear
      }
      try {
        let result = await this.$http.post('http://localhost:30200/cars', newCar)
        console.log(await result.json())
      } catch (msg) {
        console.error('Catched...')
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
