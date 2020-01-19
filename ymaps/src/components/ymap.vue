<template>
  <b-container>
    <b-row>
      <b-col>
        <yandex-map
          :settings="settings"
          map-type="map"
          zoom=10
          :coords="coords"
          style="width: 800px; height: 600px;"
        ></yandex-map>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { yandexMap } from 'vue-yandex-maps'
export default {
  components: {
    yandexMap
  },
  data () {
    return {
      settings: {
        API: 'f7da3df2-99ce-456f-b9e5-bc1934a8579a'
      },
      coords: [55.45, 36.37]
    }
  }
}
</script>
