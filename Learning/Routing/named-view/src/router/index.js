import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../components/Content'
import Aside from '../components/Aside'
import Footer from '../components/Footer'
import About from '../components/About'


Vue.use(VueRouter)

const routes = [
  { path: '/',
    components: {
      Content,
      Aside,
      Footer
    }
  },
  { path: '/About',
    components: {
      About,
      Footer
    }
  }
]

export const router = new VueRouter({
  mode: 'history',
  routes
})

