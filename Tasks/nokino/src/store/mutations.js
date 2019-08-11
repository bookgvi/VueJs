import * as types from './mautation-types'
export const mutations = {

  [types.GET_FILM_DETAILS]: (state) => {
    let i=0;
    state.filmDetails.filmPoster = [];
    state.filmDetails.filmTitle = [];
    state.filmDetails.filmOverview = [];
    state.filmDetails.id = [];
    for (let key in state.filmObj){
      state.filmDetails.filmPoster.push(state.baseImgSrc + 'w200' + state.filmObj[i].poster_path);
      state.filmDetails.filmTitle.push(state.filmObj[i].title);
      state.filmDetails.filmOverview.push(state.filmObj[i].overview);
      state.filmDetails.id.push(state.filmObj[i].id);
      i++;
    }
  },

  [types.SET_FILMS_PAGE]: (state, payload) => {
    state.filmPage += payload;
    state.filmPage = Math.max(state.filmPage,0);
  },

  [types.GET_FILM_INFO]: (state, payload) => {
    state.rawObj = payload;
    state.filmObj = payload.results;
  },

  [types.GET_DETAIL_FILM_INFO]: (state) => {}
};
