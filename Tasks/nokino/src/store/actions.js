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

  setPage: (context, payload) => {
    context.commit(types.SET_FILMS_PAGE, payload);
  },

};
