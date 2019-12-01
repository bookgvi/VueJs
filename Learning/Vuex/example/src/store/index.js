import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from './mutation-types.js'

Vue.use(Vuex);

const state = {
  counter: 0
};

const mutations = {
  [INCREMENT](state, payload) {
    if(payload=='+')
      state.counter++;
    else if(payload=='-')
      state.counter--;
    else
      state.counter += payload;
  },
};

export default new Vuex.Store({
  state,
  mutations,
});
