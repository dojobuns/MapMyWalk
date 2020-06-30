import React from "react";
import ReactDOM from "react-dom";
import * as sessionApiUtil from './util/session_api_util';
import configureStore from "./store/store";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faTimes, faUndo, faWalking } from '@fortawesome/free-solid-svg-icons'
import Root from "./components/root";

library.add(fab, faCheckSquare, faCoffee, faTimes, faUndo, faWalking)

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  
  let preloadedState = undefined;
  // debugger;
  if (window.currentUser) {
    // debugger;
    const { user, walks } = window.currentUser;
    preloadedState = {
      entities: {
        walks: walks,
      },
      session: {
        currentUser: {
          user: user,
          walks: walks,
        },
      }
    };
  }
    // window.signup = sessionApiUtil.signUp;
    // window.fetchUser = sessionApiUtil.fetchUser;
    // window.fetchUsers = sessionApiUtil.fetchUsers;
    // window.updateUser = sessionApiUtil.updateUser;
    // window.deleteUser = sessionApiUtil.deleteUser;
    // window.login = sessionApiUtil.login;
    // window.logout = sessionApiUtil.logout;
  const store = configureStore(preloadedState);
  window.getState = store.getState;
  // window.dispatch = store.dispatch;
  

  ReactDOM.render(<Root store={store} />, root);
});