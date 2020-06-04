import * as WalkAPIUtil from '../util/walk_api_util';

export const RECEIVE_WALKS = 'RECEIVE_WALKS';
export const RECEIVE_WALK = 'WALK';

export const receiveWalks = walks => {
    return {
        type: RECEIVE_WALKS,
        walks,
    };
};

export const receiveWalk = walk => {
    return {
        type: RECEIVE_WALK,
        walk
    };
};

export const fetchWalks = () => dispatch => WalkAPIUtil.fetchWalks()
    .then(walks => dispatch(receiveWalks(walks)));

export const fetchWalk = () => dispatch => WalkAPIUtil.fetchWalk()
    .then(walk => dispatch(receiveWalk(walk)));