import Vue from 'vue'
import { router } from './router'
import { firebaseApp } from './firebase'
import App from './components/App'

firebaseApp.auth().onAuthStateChanged(user => {
  if (!user) {
    router.push({name: 'signin'})
      .catch((err) => console.error('Catched...', new Error(err)))
  } else {
    router.replace({name: 'dashboard'})
      .catch((err) => console.error('Catched...', new Error(err)))
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
