import * as types from './mutation-types'

export const actions = {
  signIn: ({commit}, user_payload) => {
    commit(types.SIGN_IN, user_payload);
  },
  getOut: ({commit}) => {
    commit(types.SIGN_OUT);
  },
  setEvent: ({commit}, event_payload) => {
    commit(types.SET_EVENT, event_payload);
  }
};
