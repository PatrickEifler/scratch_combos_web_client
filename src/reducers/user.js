import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actions/user/constants';

const user = (state = {}, action) => {
  switch (action.type) {

    case USER_LOGGED_IN:
      let originalToken = action.user.token;
      return Object.assign({}, state, {
        isAuthorized: !!originalToken,
        ...action.user,
        token: originalToken.split(' ')[1]
      });

    case USER_LOGGED_OUT:
      return {};

    default:
      return state;
  }

  return state;
};

export default user;
