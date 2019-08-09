import Vue from 'vue'
import App from './Components/App'
import List from './Components/List'

Vue.component('app-list', List);

new Vue({
  render: h=>h(App)
}).$mount('#app')
