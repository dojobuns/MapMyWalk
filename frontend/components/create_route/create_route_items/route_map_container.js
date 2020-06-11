import { connect } from 'react-redux';
import RouteMap from './route_map';
import { createWalk } from '../../../actions/walks_actions';
import mapStyles from '../../../util/map_styles';

const mapStateToProps = state => {
    // debugger;
    return {
        walk: {
            location: '',
            walker_id: state.session.currentUser.user.id,
            start_lat: 0,
            start_long: 0,
            end_lat: 0,
            end_long: 0,
            duration: 0,
            distance: 0,
            date: '',
        },
        mapStyles: mapStyles,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createWalk: walkForm => dispatch(createWalk(walkForm)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteMap);