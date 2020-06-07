import { connect } from 'react-redux';
import WalkDashboard from './walk_dashboard';
import {
    fetchWalks,
    fetchUsers,
} from '../../../actions/walks_actions';

const mapStateToProps = state => {
    // debugger;
    return {
        walks: state.entities.walks,
        currentUser: state.session.currentUser,
        emptyWalk: {
            location: 'none',
            start_lat: 0,
            start_long: 0,
            end_lat: 0,
            end_long: 0,
            duration: 0,
            distance: 0,
            walkId: 1,
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchWalks: () => dispatch(fetchWalks()),
        // fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WalkDashboard)