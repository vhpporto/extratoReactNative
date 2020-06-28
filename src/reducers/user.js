import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../actions/types';

const INITIAL_STATE = {
  id: null,
  nome: null,
  email: null,
  dataCadastro: null,
};

const userLogin = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        id: action.payload.id,
        nome: action.payload.nome,
        dataCadastro: action.payload.dataCadastro,
        email: action.payload.email,
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        id: null,
        token: null,
        nome: null,
        email: null,
        dataCadastro: null,
      };
    default:
      return state;
  }
};

export default userLogin;
