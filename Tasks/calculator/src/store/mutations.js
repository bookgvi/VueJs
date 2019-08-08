import * as types from './mutation-types'

export const mutations = {
  [types.SUM]: (state, payload) => {
      state.first = payload;
      state.counter = state.first;
  },
  [types.SUB]: (state, payload) => {
    state.first = payload;
    state.counter = state.first;
  },
  [types.DIV]: (state, payload) => {
    state.first /= payload;
    state.counter = state.first;
  },
  [types.MUL]: (state, payload) => {
    state.first *= payload;
    state.counter = state.first;
  },
  [types.CLEAR]: (state, payload) => {
    state.counter = 0;
    state.first = 0;
  },
};
