import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../components/Signin'
import Dashboard from '../components/Dashboard'
import modalLogout from '../components/modalLogout'

Vue.use(VueRouter)

const routes = [
  { name: 'signin', path: '/signin', component: Signin },

  { name: 'dashboard',
    path: '/dashboard',
    component: Dashboard,
    children: [
      { name: 'logout', path: 'logout', component: modalLogout }
    ]
  }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})
