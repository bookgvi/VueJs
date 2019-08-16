import Vue from 'vue'
import App from './App'
import YMapPlugin from 'vue-yandex-maps'

const yaSettings = {
  apiKey: 'f7da3df2-99ce-456f-b9e5-bc1934a8579a',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}

Vue.use(YMapPlugin, yaSettings)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
