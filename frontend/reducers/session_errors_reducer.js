import {
    RECEIVE_ERRORS,
    RECEIVE_CURRENT_USER,
    CLEAR_ERRORS,
  } from '../actions/session_actions';
  
  export default (state = [], action) => {
    debugger;
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_ERRORS:
        return action.errors;
      case CLEAR_ERRORS:
        return [];
      case RECEIVE_CURRENT_USER:
        return [];
      default:
        return state;
    }
  };