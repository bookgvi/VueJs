import * as types from './mutation-types'

export const actions = {
  sum: ({commit}, payload) => {
    commit(types.SUM, payload)
  },
  sub: ({commit}, payload) => {
    commit(types.SUB, payload)
  },
  div: ({commit}, payload) => {
    commit(types.DIV, payload)
  },
  mul: ({commit}, payload) => {
    commit(types.MUL, payload)
  },
  clear: ({commit}) => {
    commit(types.CLEAR)
  },
}
