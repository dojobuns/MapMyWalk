import React from "react";
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import ProfileContainer from './profile/profile_container';
import { 
  AuthRoute,
  ProtectedRoute
} from '../util/route_util';

import { 
  Route,
  Link,
} from 'react-router-dom';

const App = () => (
  <div>
    <Route path='/' component={NavBarContainer} />
    <AuthRoute exact path='/login' component={LogInFormContainer} />
    <AuthRoute exact path='/signup' component={SignUpFormContainer} />
    <ProtectedRoute exact path='/profile' component={ProfileContainer} />
  </div>
);

export default App;