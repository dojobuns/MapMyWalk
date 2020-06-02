import * as sessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = currentUser => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser,
    };
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    };
}

const receiveErrors = (errors = []) => {
    console.log(errors);
    return {
        type: RECEIVE_ERRORS,
        errors,
    };
}

export const signupUser = formUser => dispatch => sessionAPIUtil.signUp(formUser)
    .then(user => dispatch(receiveCurrentUser(user)), errors => dispatch(receiveErrors(errors)));

export const loginUser = formUser => dispatch => sessionAPIUtil.login(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));

export const logoutUser = () => dispatch => sessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()));