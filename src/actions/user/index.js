import fetch from 'isomorphic-fetch';
import projectConfig from '../../config/project';
import * as Types from './constants';

function shouldLoginUser(state) {
  const user = state.user;
  if (user.token) {
    return false;
  } else {
    return true;
  }
}

function authorizeUser() {
  //Todo: use auth service
  return new Promise((res, rej) => {
    res({ token: 'test' });
  });
}

export function receivePermission(user) {
  return {
    type: Types.USER_LOGGED_IN,
    lastReceived: Date.now(),
    user
  };
}

export function login() {
  return (dispatch, getState) => {
    if (shouldLoginUser(getState())) {
      return authorizeUser().then(user => {
        return dispatch(receivePermission(user));
      });
    }
  };
}
