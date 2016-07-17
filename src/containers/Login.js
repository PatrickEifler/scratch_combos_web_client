import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/user';
import { replace } from 'react-router-redux';
import redirectAfterLogin from '../config/redirectAfterLogin';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(login());
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.user.isAuthorized !== this.props.user.isAuthorized;
  }

  redirectIfLoggedIn() {
    if (this.props.user.isAuthorized) {
      this.props.dispatch(replace(redirectAfterLogin.url));
    }
  }

  render() {
    return (
      <div>
        Redirecting...
      </div>
    );
  }
}


function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Login);
