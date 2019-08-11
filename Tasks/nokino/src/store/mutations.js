import * as types from './mautation-types'
export const mutations = {
  [types.SET_FILM_COUNTER]: (state, payload) => {
    state.filmCounter += payload;
  },

  [types.GET_FILM_DETAILS]: (state) => {
    state.filmDetails.filmPoster = state.baseImgSrc + state.filmObj[state.filmCounter].poster_path;
    state.filmDetails.filmTitle = state.filmObj[state.filmCounter].title;
    state.filmDetails.filmOverview = state.filmObj[state.filmCounter].overview;
    state.filmDetails.nextFilmTitle = state.filmObj[state.filmCounter+1].title;
    state.filmDetails.previousFilmTitle = state.filmObj[state.filmCounter-1].title;
  },

  [types.GET_FILM_INFO]: (state, payload) => {
    state.filmObj = payload;
  },
};
