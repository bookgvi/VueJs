import Vue from 'vue'
import App from './App.vue'
import '../css/bootstrap.min.css'
import { RestDataSource } from "./restDataSource";

new Vue({
  render: h => h(App),
  provide: () => ({
    eventBus: new Vue(),
    restDataSource: new RestDataSource()
  })
}).$mount('#app')
