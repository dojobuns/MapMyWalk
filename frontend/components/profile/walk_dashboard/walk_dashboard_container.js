import { connect } from 'react-redux';
import WalkDashboard from './walk_dashboard';
import {
    fetchWalks,
    fetchCurrentUser,
} from '../../../actions/walks_actions';

const mapStateToProps = state => {
    // debugger;
    return {
        walks: state.entities.walks,
        currentUser: state.session.currentUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchWalks: () => dispatch(fetchWalks()),
        // fetchCurrentUser: user => dispatch(fetchCurrentUser(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WalkDashboard)