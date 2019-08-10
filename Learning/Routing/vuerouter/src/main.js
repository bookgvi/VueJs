import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './routes'
Vue.use(VueRouter);

import App from './Components/App'

new Vue({
  el: '#app',
  router,
  render: h=>h(App)
});
