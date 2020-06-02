import React from "react";
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import NavBarContainer from './nav_bar/nav_bar_container';

import { 
  Route,
  Link,
} from 'react-router-dom';

const App = () => (
  <div>
    <NavBarContainer />
    <Route exact path='/login' component={LogInFormContainer} />
    <Route exact path='/signup' component={SignUpFormContainer} />
  </div>
);

export default App;