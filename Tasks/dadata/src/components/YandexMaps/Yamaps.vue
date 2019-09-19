<template lang="pug">
  .yandexmaps
    .row.q-pt-lg
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
    }
  }
}
</script>

<style>
</style>
