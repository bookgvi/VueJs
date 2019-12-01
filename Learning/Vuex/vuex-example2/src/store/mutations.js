import * as types from './mutation-types'

export const mutations = {
  [types.INCREMENT]: (state, payload) => {
    state.counter += +payload.incCount;
  }
};
