import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = state => {
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);