import * as types from './mutation-types'

export const actions = {
  incCounter: ({commit}, {...payload}) => {
    setTimeout(()=>{
      commit(types.INCREMENT, payload);
    },payload.timeout);
  }
};
