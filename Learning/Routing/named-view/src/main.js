import Vue from 'vue'
import App from './components/App'
import { router } from './router'

router.beforeEach((to, from ,next) => {
  console.dir(to)
  console.log ('"',from.fullPath,'" => "',to.fullPath,'"')
  next()
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
