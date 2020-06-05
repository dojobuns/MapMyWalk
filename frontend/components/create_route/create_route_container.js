import { connect } from 'react-redux';
import React from 'react';
import CreateRoute from './create_route';
import {
    fetchWalks,
} from '../../actions/walks_actions'

const mapStateToProps = state => {
    return {
        walks: Object.value(state.entities.walks),
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchWalks: () => dispatch(fetchWalks()),
    }
}

export default connect(null, null)(CreateRoute);