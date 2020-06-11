import React from 'react';
import Splash from './splash';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        currentUser: state.session.currentUser
    }
}

export default connect(mapStateToProps, null)(Splash);