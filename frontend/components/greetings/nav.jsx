import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
      <nav className="login-signup">
        <Link to="/login" activeClassName='login-button'>
          <button className='login-button'>
            LOG IN
          </button>
        </Link>

        <Link to="/signup" activeClassName='signup-button'>
          <button className='signup-button'>
            SIGN UP
          </button>
        </Link>
      </nav>
    );
    const personalGreeting = () => (
      <hgroup className="header-group">
        <h2 className="header-name">Hi, {currentUser.username}!</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
      </hgroup>
    );
  
    return currentUser ? personalGreeting() : sessionLinks();
  };
  
  
  export default Greeting;