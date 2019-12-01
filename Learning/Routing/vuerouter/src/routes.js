import VueRouter from 'vue-router'

import Home from './Components/Home'
import Cars from './Components/Cars'
import Car from './Components/Car'
import Carinfo from './Components/Carinfo'
import Errors from './Components/Error'


export default new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Home},
    {path: '/cars', component: Cars},
    {path: '/car/:id', component: Car,
      children: [
        {path: 'full', component: Carinfo, name: 'Carinfo'}
      ]},
    {path: '/none', redirect: '/'},
    {path: '*', component: Errors}
  ],
})
