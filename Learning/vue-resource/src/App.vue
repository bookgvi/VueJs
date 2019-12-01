<template>
  <div id="app" class="container">
      <h2 class="mt-3">Holly Vue!</h2>
      <b-form>
        <b-form-group label="Car name" label-for="carName">
          <b-form-input id="carName" name="carName" type="text" v-model.trim="carName"></b-form-input>
        </b-form-group>
        <b-form-group label="Car year" label-for="carYear">
          <b-form-input id="carYear" name="carYear" type="text" v-model="carYear"></b-form-input>
        </b-form-group>
          <b-button type="submit" @click.prevent="createCar" variant="success">Create car</b-button>
          <b-button @click.prevent="getCars" variant="primary">Get cars</b-button>
      </b-form>
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
      'returnAllCars',
      'resource'
    ])
  },
  created () {
    this.setResource(this.$resource('cars'))
  },
  methods: {
    async createCar () {
      let newCar = {
        name: this.carName,
        year: this.carYear
      }
      try {
        await this.resource.save({}, newCar)
      } catch (err) {
        console.error('Catched... Send status = ', err.ok)
      }
      this.getCars()
    },
    ...mapActions([
      'getCars',
      'deleteCar',
      'setResource'
    ]),
    async deleteThis (id) {
      this.deleteCar(id)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
