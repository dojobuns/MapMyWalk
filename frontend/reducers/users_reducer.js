import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default (state = {}, action) => {
    // debugger;
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.user.id]: action.currentUser.user })
        default:
            return state;    
    }
}