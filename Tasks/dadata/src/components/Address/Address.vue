<template lang="pug">
  .address-class
    .row.q-pb-lg
      .col.q-pr-sm
        span Country
        q-input(outlined, dense, disable, label="Россия")
      .col
        span City
        q-select(
          v-model="city"
          :options="cityArr"
          @input.native="getCity($event)"
          @filter="filtr"
          input-debounce="0"
          use-input
          fill-input
          hide-selected
          outlined
          dense
        )
          template(v-slot:no-option)
            q-item
              q-item-section.text-grey No results
    .row.q-pb-lg
      .col
        span Address
        q-select(
          v-model="address"
          :options="addressArr"
          @input.native="getAddress($event)"
          @filter="filtr"
          input-debounce="0"
          use-input
          fill-input
          hide-selected
          outlined
          dense
        )
          template(v-slot:no-option)
            q-item
              q-item-section.text-grey No results

</template>

<script>
import axios from 'axios'
export default {
  // name: 'ComponentName',
  data () {
    return {
      city: 'Москва',
      cityArr: [],
      address: '',
      addressArr: [],
      options: {
        token: 'daa0567fa0fb73ae73ae7e1e389dfefe52ef35b9'
      }
    }
  },
  mounted () {
    axios.defaults.headers.common['Authorization'] = `Token ${this.options.token}`
  },
  methods: {
    async getCity (e) {
      await axios.post('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', {
        count: 5,
        query: e.target.value,
        from_bound: { value: 'city' },
        to_bound: { value: 'settlement' }
      }).then(resp => {
        this.cityArr = resp.data.suggestions.map(item => {
          if (item.data.city) {
            return item.data.city
          } else if (item.data.settlement_with_type) {
            return item.data.settlement_with_type
          }
        })
      })
    },
    async getAddress (e) {
      console.log(this.city)
      await axios.post('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', {
        count: 5,
        query: e.target.value,
        locations: [{
          city: this.city
        }],
        restrict_value: true
      }).then(resp => {
        this.addressArr = resp.data.suggestions.map(item => {
          return `${item.value}`
        })
      })
    },
    filtr (val, update) {
      update(() => {})
    }
  }
}
</script>

<style>
</style>
