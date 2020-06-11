import { connect } from 'react-redux';
import Panel from './panel';

const mapStateToProps = state => {
    return {
        walk: {
            walker_id: state.session.currentUser.user.id,
            location: '',
            date: '',
            duration: '',
            distance: '',
            description: '',
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Panel);