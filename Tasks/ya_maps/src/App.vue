<template>
  <div id="app">
    <h2 class="title">Holly Vue!!! Yandex maps</h2>
    <yandex-map
      :coords="moscow.center"
      :zoom="moscow.zoom"
      :map-type="mapsGeneral.mapType[0]"
      style="width: 1024px; height: 680px;"
      @click="hMapClick"
    >
      <ymap-marker
        marker-id="111"
        hint-content="some hint"
        :coords="marker.coords"
      ></ymap-marker>
    </yandex-map>
  </div>
</template>

<script>
export default {
  data: () => ({
    moscow: {
      center: [55.76, 37.64],
      zoom: '10'
    },
    mapsGeneral: {
      mapType: ['map', 'satellite', 'hybrid']
    },
    marker: {
      coords: []
    }
  }),
  methods: {
    hMapClick (e) {
      this.marker.coords = e.get('coords')
    }
  }
}
</script>

<style scoped>

</style>
