import * as types from './mutation-types'

export const mutations = {
  [types.SET_RESOURCE]: (state, payload) => {
    state.resource = payload
  },
  [types.GET_CARS]: (state, payload) => {
    state.allCars = ''
    state.allCars = payload
  },
  [types.DELETE_CAR]: (state, id) => {
    for (let item of state.allCars.entries()) {
      if (item[1].id === id) {
        state.allCars.splice(item[0], 1)
      }
    }
  }
}
