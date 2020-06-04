import React from "react";
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import ProfileContainer from './profile/profile_container';
import SplashContainer from './splash/splash_container';
import NavJrContainer from './nav_jr/nav_jr_container';

import { 
  AuthRoute,
  ProtectedRoute
} from '../util/route_util';

import { 
  Route,
} from 'react-router-dom';

const App = () => (
  <div>
    <Route path='/' component={NavBarContainer} />
    <Route exact path='/' component={SplashContainer} />
    <AuthRoute exact path='/login' component={LogInFormContainer} />
    <AuthRoute exact path='/signup' component={SignUpFormContainer} />
    <ProtectedRoute exact path='/profile' component={ProfileContainer} />
    <ProtectedRoute path='/profile' component={NavJrContainer} />
  </div>
);

export default App;