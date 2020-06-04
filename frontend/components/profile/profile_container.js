import { connect } from 'react-redux';
import Profile from './profile';
import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    // debugger;
    return {
        currentUser: state.session.currentUser,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logoutUser: () => dispatch(logoutUser()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);