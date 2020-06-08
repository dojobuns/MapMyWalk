import { connect } from 'react-redux';
import WalkDashboard from './walk_dashboard';
import {
    fetchWalks,
} from '../../../actions/walks_actions';

const mapStateToProps = state => {
    const d = new Date();
    const month = d.getMonth();
    const day = d.getDate();
    const year = d.getFullYear();
    const date = `${year}/${month+1}/${day}`;
    // debugger;

    // for (var key in state.entities.walks) {
    //     if (state.entities.walks[key] === state.session.currentUser.user.id) {
    //         currentUserWalks[key] = state.entities.walks[key];
    //     }
    // }

    // for (var key in state.entities.walks) {
    //     console.log(state.entities.walks[key])
    // }
    return {
        walks: state.entities.walks,
        currentUser: state.session.currentUser,
        emptyWalk: {
            location: 'Your Walk',
            date: date,
            start_lat: 0,
            start_long: 0,
            end_lat: 0,
            end_long: 0,
            duration: '--',
            distance: 0.0,
            walkId: 1,
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchWalks: () => dispatch(fetchWalks()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WalkDashboard)