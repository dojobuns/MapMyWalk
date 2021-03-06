import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.currentUser)}
);
  
const Auth = ({ loggedIn, path, component: Component }) => (
  <Route
    path={path}
    render={props => (
      loggedIn ? <Redirect to='/profile' /> : <Component {...props} />
    )}
  />
);

const Protected = ({ loggedIn, path, component: Component, exact}) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      loggedIn ? <Component {...props} /> : <Redirect to='/' />
    )
    }
  />
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
