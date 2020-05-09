import {USER_LOGGED_IN, USER_LOGGED_OUT} from './types';

export const loggin = user => ({
  type: USER_LOGGED_IN,
  payload: user,
});

export const loggout = () => ({
  type: USER_LOGGED_OUT,
});
