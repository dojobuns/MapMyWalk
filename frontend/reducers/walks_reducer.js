import {
    RECEIVE_WALKS,
    RECEIVE_WALK,
} from '../actions/walks_actions';

export default (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_WALKS:
            return action.walks;
        case RECEIVE_WALK:
            const newState = Object.assign({}, state);
            newState[action.walk.id] = action.walk;
            return newState;
        default:
            return state;
    }
}