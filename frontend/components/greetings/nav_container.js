import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import Greeting from './nav';

const mapStateToProps = ({ session, entities: { users } }) => {
    // debugger;
    return {
        currentUser: users[session.id],
    };
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logoutUser())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);