import {connect} from 'react-redux';
import {
    fetchWalks,
} from '../../../actions/walks_actions';
import TotalWalks from './total_walks';

const mapStateToProps = state => {
    // debugger;
    return {
        walks: state.entities.walks,
    }
}

const mapDispatchToProps = dispatch => {
    // debugger;
    return {
        fetchWalks: () => dispatch(fetchWalks()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TotalWalks)