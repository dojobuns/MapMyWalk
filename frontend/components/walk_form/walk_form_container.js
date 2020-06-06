import { connect } from 'react-redux';
import {
    createWalk,
} from '../../actions/walks_actions';
import WalkForm from './walk_form';

const mapStateToProps = state => {
    // debugger;
    return {
        walk: {
            walker_id: state.session.currentUser.user.id,
            map: '',
            duration: 0,
            distance: 0,
            start_lat: 0,
            start_long: 0,
            end_lat: 0,
            end_long: 0,
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createWalk: walk => dispatch(createWalk(walk))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WalkForm);