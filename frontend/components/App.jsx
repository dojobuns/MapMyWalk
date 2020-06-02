import React from "react";
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';
import ProfileContainer from './profile/profile_container';

import { 
  Route,
  Link,
} from 'react-router-dom';

const App = () => (
  <div>
    <Route path='/' component={NavBarContainer} />
    <Route exact path='/login' component={LogInFormContainer} />
    <Route exact path='/signup' component={SignUpFormContainer} />
    <Route exact path='/profile' component={ProfileContainer} />
  </div>
);

export default App;