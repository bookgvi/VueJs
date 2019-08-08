import * as types from './mutation-types'
import Vue from 'vue'
export const mutations = {
  [types.ADD_COMMENT]: (state, payload) => {
    state.posts.unshift({title: payload, author: 'John Doe', date: new Date(Date.now()).toLocaleString()});
  },

  [types.CHANGE_COMMENT]: (state, [payload]) => {
    Vue.set(state.posts[payload[0]], 'title', payload[1]);
  },

  [types.DELETE_COMMENT]: (state, payload) => {
    state.posts.splice(payload,1);
  }
}
