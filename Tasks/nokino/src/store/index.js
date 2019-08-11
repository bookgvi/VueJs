import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  btnPrevPageStatus: false,
  btnNextPageStatus: false,

  baseImgSrc: 'https://image.tmdb.org/t/p/',
  rawObj: {},
  filmObj: {},
  filmPage: 1,

  filmDetails: {
    filmTitle: [],
    filmPoster200: [],
    filmPoster500: [],
    filmOverview: [],
    id: [],
  },
};

import {getters} from './getters'
import {mutations} from './mutations'
import {actions} from './actions'
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
