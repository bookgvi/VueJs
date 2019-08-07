import * as types from './mutation-types';

export const initJokes = ({commit}) => {
  fetch('https://swapi.co/api/people/1', {
    method: 'GET'
  })
    .then(response => response.json())
    .then(json => commit(types.INIT_JOKES, json))
};
