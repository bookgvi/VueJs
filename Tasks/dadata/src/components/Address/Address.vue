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
          @input.native="getHint($event)"
          @filter="filtr"
          input-debounce="0"
          use-input
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
      city: null,
      cityArr: [],
      options: {
        token: 'daa0567fa0fb73ae73ae7e1e389dfefe52ef35b9'
      }
    }
  },
  methods: {
    async getHint (e) {
      axios.defaults.headers.common['Authorization'] = `Token ${this.options.token}`
      await axios.post('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', {
        count: 1,
        query: e.target.value
      }).then(resp => {
        if (!resp.data.suggestions.length) { return }
        console.log(resp.data.suggestions)
        this.cityArr = resp.data.suggestions.map(item => {
          if (item.data.city) {
            return item.data.city_with_type
          } else if (item.data.settlement_with_type) {
            return item.data.settlement_with_type
          }
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
