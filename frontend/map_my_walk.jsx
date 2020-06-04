import React from "react";
import ReactDOM from "react-dom";
import * as sessionApiUtil from './util/session_api_util';
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  
  let preloadedState = undefined;
  // debugger;
  if (window.currentUser) {
    // debugger;
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
    // window.signup = sessionApiUtil.signUp;
    // window.fetchUser = sessionApiUtil.fetchUser;
    window.fetchUsers = sessionApiUtil.fetchUsers;
    // window.updateUser = sessionApiUtil.updateUser;
    // window.deleteUser = sessionApiUtil.deleteUser;
    // window.login = sessionApiUtil.login;
    window.logout = sessionApiUtil.logout;
  const store = configureStore(preloadedState);
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  

  ReactDOM.render(<Root store={store} />, root);
});