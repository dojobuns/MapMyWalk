import { connect } from 'react-redux';
import Profile from './profile';
import {
    logoutUser,
    fetchUsers,
} from '../../actions/session_actions';
import { fetchWalks } from '../../actions/walks_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger;
    return {
        currentUser: state.session.currentUser.user,
        walks: state.entities.walks,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch(logoutUser()),
        fetchWalks: () => dispatch(fetchWalks()),
        fetchUsers: () => dispatch(fetchUsers()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);