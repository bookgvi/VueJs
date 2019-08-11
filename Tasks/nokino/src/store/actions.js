import * as types from './mautation-types';

export const actions = {
  fetchFilmsInfo: ({commit}, payload) => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=382fdc20a456036a67a5e56974cb5016',{
      method: 'GET',
      // mode: 'no-cors',
    })
      .then(response => response.json())
      .then(json => commit(types.GET_FILM_INFO, json.results))
      .then(() => {
        commit(types.GET_FILM_DETAILS);
      })
      .catch(()=>console.error('...Catched load img error'));
      commit(types.SET_FILM_COUNTER, payload)
  }

}
