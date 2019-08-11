import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'
import App from './Components/App'

Vue.use(VueRouter);

import filmPage from './Components/filmPage'
const routes = [
  {path: '/page/:num', component: filmPage}
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  el: '#app',
  store,
  router,
  render: h=>h(App)
});
