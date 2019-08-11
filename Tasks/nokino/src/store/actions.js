import * as types from './mautation-types';

export const actions = {
  fetchFilmsInfo: (context) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=382fdc20a456036a67a5e56974cb5016&page=${context.state.filmPage}`,{
      method: 'GET',
      // mode: 'no-cors',
    })
      .then(response => response.json())
      .then(json => context.commit(types.GET_FILM_INFO, json))
      .then(() => {
        context.commit(types.GET_FILM_DETAILS);
      })
      .catch((msg)=>console.error('Catched... ', new Error(msg)));
  },

  setForwardBtnStatus: ({commit}, payload) => commit(types.SET_FORWARD_BTN_STATUS, payload),
  setBackwardBtnStatus: ({commit}, payload) => commit(types.SET_BACKWARD_BTN_STATUS, payload),

  setPage: (context, payload) => {
    context.commit(types.SET_FILMS_PAGE, payload);
  },

  fetchFilmDetails: (context, payload) => {
    fetch(`https://api.themoviedb.org/3/movie/${payload}?api_key=382fdc20a456036a67a5e56974cb5016`,{
      method: 'GET'
    })
      .then(response => response.json())
      // .then(json => console.log(json))
      .catch(err => console.error('Catched...', new Error(err)));
  }
};
