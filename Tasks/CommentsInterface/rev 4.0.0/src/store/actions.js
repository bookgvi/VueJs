import * as types from './mutation-types'
export const actions = {
  addComment: ({commit}, payload) => {
    commit(types.ADD_COMMENT, payload);
  },

  changeComment: ({commit}, ...payload) => {
    commit(types.CHANGE_COMMENT, payload)
  },

  deleteComment: ({commit}, payload) => {
    commit(types.DELETE_COMMENT, payload);
  }
}
