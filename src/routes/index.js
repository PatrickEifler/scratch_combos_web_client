import React from 'react';
import { Route, withRouter } from 'react-router';
import { routerActions } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';
import App from '../containers/App';
import Combos from '../containers/Combos';
import Login from '../containers/Login';
import NoMatch from '../containers/NoMatch';

const UserIsAuthenticated = UserAuthWrapper({
  authSelector: state => state.user,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
});

export default (
  <Route path="/" component={App}>
    <Route path="login" component={withRouter(Login)}/>
    <Route path="combos" component={UserIsAuthenticated(Combos)}/>
    <Route path="*" component={NoMatch}/>
  </Route>
);
