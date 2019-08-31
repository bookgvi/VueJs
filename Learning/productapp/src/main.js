import Vue from 'vue'
import App from './App.vue'
import '../css/bootstrap.min.css'

new Vue({
  render: h => h(App),
  provide: () => ({
    eventBus: new Vue()
  })
}).$mount('#app')
