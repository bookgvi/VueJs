import * as types from './mutation-types'

export const mutations = {
  [types.ADD_COMMENT]: (state, payload) => {
    state.posts.unshift({title: payload, author: 'John Doe', date: new Date(Date.now()).toLocaleString()});
  }
}
