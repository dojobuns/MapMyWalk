import * as sessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const FETCH_USERS = 'FETCH_USERS';

const receiveCurrentUser = currentUser => {
    // debugger;
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser,
    };
}

const logoutCurrentUser = () => {
    // debugger;
    return {
        type: LOGOUT_CURRENT_USER,
    };
}

const receiveErrors = (errors = []) => {
    // debugger;
    console.log(errors);
    return {
        type: RECEIVE_ERRORS,
        errors,
    };
}

export const clearErrors = () => {
    return {
        type: CLEAR_ERRORS,
        errors: []
    }
}

const receiveUsers = users => {
    return {
        type: FETCH_USERS,
        users
    }
}

export const signupUser = formUser => dispatch => sessionAPIUtil.signUp(formUser)
    .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors)));

export const loginUser = formUser => dispatch => sessionAPIUtil.login(formUser)
    .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors)));

export const logoutUser = () => dispatch => sessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()));

export const fetchCurrentUser = userId => dispatch => sessionAPIUtil.fetchUser(userId)
    .then(user => dispatch(receiveCurrentUser(user)));

export const fetchUsers = () => dispatch => sessionAPIUtil.fetchUsers()
    .then(users => dispatch(receiveUsers(users)));