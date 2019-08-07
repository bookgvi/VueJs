import Vue from 'vue'
import App from './Components/App.vue'
import store from './store'

store.commit('increment');

new Vue({
  el: '#app',
  store,
  render: h=>h(App),
});
