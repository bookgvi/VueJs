import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  posts: [
    {title: 'Holly Vue', author: 'John Doe', date: new Date(Date.now()).toLocaleString()}
  ]
};

export default new Vuex.Store({
  state
});
