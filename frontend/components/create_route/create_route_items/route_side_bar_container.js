import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RouteSideBar from './route_side_bar';
import { createWalk } from '../../../actions/walks_actions';

const mapStateToProps = state => {
    const d = new Date();
    const month = d.getMonth();
    const day = d.getDate();
    const year = d.getFullYear();
    const date = `${year}-${month+1}-${day}`;
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
        createWalk: walkForm => dispatch(createWalk(walkForm)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RouteSideBar));