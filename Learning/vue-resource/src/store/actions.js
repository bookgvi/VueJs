import * as types from './mutation-types'
import Vue from 'vue'

export const actions = {
  getCars: ({commit}) => {
    Vue.http.get('http://localhost:3000/cars')
      .then(response => response.json())
      .then(json => {
        commit(types.GET_CARS, json)
      })
      .catch(err => console.error('Catched... Get status = ', err.ok))
  }
}
