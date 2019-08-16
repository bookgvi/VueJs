<template>
  <div id="app">
    <h2 class="title">Holly Vue!!! Yandex maps</h2>
    <yandex-map
      :coords="moscow.center"
      :zoom="moscow.zoom"
      :map-type="mapsGeneral.mapType[0]"
      style="width: 600px; height: 600px;"
    ></yandex-map>
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
    }
  })
}
</script>

<style scoped>

</style>
