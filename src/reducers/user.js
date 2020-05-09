import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../actions/types';

const INITIAL_STATE = {
  id: null,
  nome: null,
  dataCadastro: null,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        id: action.payload.id,
        token: action.payload.token,
        nome: action.payload.nome,
        dataCadastro: action.payload.dataCadastro,
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        id: null,
        token: null,
        nome: null,
        dataCadastro: null,
      };
    default:
      return state;
  }
};

export default user;
