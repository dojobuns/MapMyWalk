import { connect } from 'react-redux';
import WalkDashboard from './walk_dashboard';
import {
    fetchWalks,
} from '../../../actions/walks_actions';

const mapStateToProps = state => {
    debugger;
    return {
        walks: state.entities.walks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchWalks: () => dispatch(fetchWalks()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WalkDashboard)