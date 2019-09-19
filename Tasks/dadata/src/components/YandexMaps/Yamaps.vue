<template lang="pug">
  .yandexmaps
    .row.q-pb-lg
      .col
        q-select(
          use-input
          v-model="val"
          :options="options"
          @input.native="dadata($event)"
          @filter="(val, update) => update(() => {})"
          clearable
          dense
          outlined
        )
    .row.q-pb-lg
      yandexMap(
        :settings="settings"
        :coords="coordsMap"
        :map-type="type"
        :zoom="zoom"
        :controls="controls"
        style="width: 640px; height: 480px;"
        @click="hClick($event)"
      )
        ymapMarker(
          :coords="coordsMarker"
          markerId="1"
          hint-content="some hint"
        )
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
export default {
  components: {
    yandexMap,
    ymapMarker
  },
  data () {
    return {
      token: 'daa0567fa0fb73ae73ae7e1e389dfefe52ef35b9',
      options: ['1', '2', '3'],
      val: '',
      settings: {
        apiKey: 'f7da3df2-99ce-456f-b9e5-bc1934a8579a'
      },
      coordsMap: [55.74954, 37.621587],
      coordsMarker: [55.74954, 37.621587],
      zoom: 14,
      type: 'map',
      controls: []
    }
  },
  methods: {
    hClick (e) {
      this.coordsMarker = e.get('coords')
    },
    newValue (val, done) {
      done(val)
    },
    async dadata (e) {
      await this.$axios.post('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', {
        count: 5,
        query: e.target.value
      }, {
        headers: {
          Authorization: `Token ${this.token}`
        }
      }).then(resp => {
        console.log(this.val)
        this.options = resp.data.suggestions.map(item => item.value)
      })
    }
  }
}
</script>

<style>
</style>
