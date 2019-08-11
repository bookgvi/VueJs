import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  baseImgSrc: 'https://image.tmdb.org/t/p/w400',
  filmObj: '',
  filmCounter: -1,

  filmDetails: {
    filmTitle: '',
    filmPoster: '',
    filmOverview: '',
    nextFilmTitle: '',
    previousFilmTitle: '',
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
