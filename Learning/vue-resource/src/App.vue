<template>
  <div id="app">
    <div class="container">
      <h2 class="mt-3">Holly Vue!</h2>
      <form>
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
          <input id="carYear" name="carYear" type="text" v-model="carYear" class="form-control">
        </div>
        <div class="form-group">
          <button type="submit" @click.prevent="createCar" class="btn btn-success">Create car</button>
          <button @click.prevent="getCars" class="btn btn-primary">Get cars</button>
        </div>
      </form>
      <hr>
      <div class="row">
        <car-card
          v-for="(item, index) of returnAllCars"
          :key="index"
          :name="item.name"
          :year="item.year"
          :cardId="item.id"
          @deleteThisCar="deleteThis"
        ></car-card>
      </div>
    </div>
  </div>
</template>

<script>
import carCard from './components/carCard'
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      carName: '',
      carYear: '2019'
    }
  },
  components: {
    'car-card': carCard
  },
  computed: {
    ...mapGetters([
      'returnAllCars'
    ])
  },
  methods: {
    async createCar () {
      let newCar = {
        name: this.carName,
        year: this.carYear
      }
      try {
        await this.$http.post('http://localhost:3000/cars', newCar)
      } catch (err) {
        console.error('Catched... Send status = ', err.ok)
      }
      this.getCars()
    },
    ...mapActions([
      'getCars'
    ]),
    async deleteThis (id) {
      try {
        await this.$http.delete(`http://localhost:3000/cars/${id}`)
      } catch (err) {
        console.error('Catched... Error deleting car')
      }
      this.getCars()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
