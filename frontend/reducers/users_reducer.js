import {
    RECEIVE_CURRENT_USER,
    FETCH_USERS
} from '../actions/session_actions';

export default (state = {}, action) => {
    // debugger;
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.user.id]: action.currentUser.user })
        case FETCH_USERS:
            return action.users
        default:
            return state;    
    }
}