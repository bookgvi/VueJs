import Vue from 'vue'
import axios from 'axios'
import { Loading } from 'quasar'

const baseURL = 'https://api.coindesk.com/v1/bpi/currentprice.json'
// Vue.prototype.$axios = axios
const req = axios.create({ baseURL })

req.interceptors.request.use(config => {
  Loading.show()
  return config
})
req.interceptors.response.use(resp => {
  Loading.hide()
  return resp
}, err => {
  Loading.hide()
  Promise.reject(err)
})

Object.defineProperty(Vue.prototype, '$http', {
  get () {
    return req
  }
})
