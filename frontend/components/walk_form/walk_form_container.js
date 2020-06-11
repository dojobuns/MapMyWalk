import { connect } from 'react-redux';
import {
    createWalk,
} from '../../actions/walks_actions';
import WalkForm from './walk_form';

const mapStateToProps = state => {
    const d = new Date();
    const month = d.getMonth();
    const day = d.getDate();
    const year = d.getFullYear();
    const date = `${month+1}/${day}/${year}`;
    return {
        walk: {
            walker_id: state.session.currentUser.user.id,
            location: '',
            date: date,
            duration: '',
            distance: '',
            description: '',
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createWalk: walk => dispatch(createWalk(walk))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WalkForm);