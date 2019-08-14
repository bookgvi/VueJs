import * as types from './mutation-types'
import Vue from 'vue'

export const actions = {
  getCars: (context) => {
    Vue.http.get('http://localhost:3000/cars')
      .then(response => response.json())
      .then(json => {
        context.commit(types.GET_CARS, json)
      })
      .catch(err => console.error('Catched... Get status = ', err.ok))
  },
  deleteCar: async ({commit}, payload) => {
    try {
      await Vue.http.delete(`http://localhost:3000/cars/${payload}`)
    } catch (err) {
      console.error('Catched...')
    }
    commit(types.DELETE_CAR, payload)
  }
}
