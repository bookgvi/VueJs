import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  posts: [
    {title: 'Взят в работу', author: 'John Doe', date: new Date(Date.now()).toLocaleString()},
    {title: 'Подождать...', author: 'John Doe', date: new Date(Date.now()).toLocaleString()},
  ],
};

import {getters} from './getters'

export default new Vuex.Store({
  state,
  getters,
});
