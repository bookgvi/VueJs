import Vue from 'vue'
import store from './store'
import VueRouter from 'vue-router'
import App from './Components/App'

Vue.use(VueRouter);

import filmPage from './Components/filmsPage'
import filmDetails from './Components/filmDetails'
const routes = [
  {path: '/page/:num', component: filmPage},
  {path: '/film/:id', component: filmDetails}
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition){
    if(savedPosition) return savedPosition;
  }
});

new Vue({
  el: '#app',
  store,
  router,
  render: h=>h(App)
});
