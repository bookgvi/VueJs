import * as types from './mutation-types'
import Vue from 'vue'

export const actions = {
  setResource: ({commit}, payload) => {
    commit(types.SET_RESOURCE, payload)
  },
  getCars: (context) => {
    context.state.resource.get({})
      .then(response => response.json())
      .then(json => {
        context.commit(types.GET_CARS, json)
      })
      .catch(err => console.error('Catched... Get status = ', err.ok))
  },
  deleteCar: async (context, payload) => {
    context.commit(types.SET_RESOURCE, Vue.resource(`cars/${payload}`))
    try {
      await context.state.resource.remove({})
    } catch (err) {
      console.error('Catched...')
    }
    context.commit(types.SET_RESOURCE, Vue.resource(`cars`))
    context.commit(types.DELETE_CAR, payload)
  }
}
