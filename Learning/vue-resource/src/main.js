import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import VueResource from 'vue-resource'
import BootstrapVue, {
  LayoutPlugin,
  CardPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.use(LayoutPlugin)
Vue.use(CardPlugin)
Vue.use(FormPlugin)
Vue.use(FormInputPlugin)
Vue.use(ButtonPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
