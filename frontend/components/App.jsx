import React from "react";
import GreetingContainer from './greetings/greeting_container';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';

import { 
  Route,
  Link,
} from 'react-router-dom';

const App = () => (
  <div>
    <h1>Map My Walk</h1>
    <GreetingContainer />
    <Route exact path='/login' component={LogInFormContainer} />
    <Route exact path='/signup' component={SignUpFormContainer} />
  </div>
);

export default App;