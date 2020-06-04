import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { 
    loginUser,
    clearErrors,
 } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
    // debugger;
    return {
        errors: state.errors.session,
        formType: 'Login',
        user: {
            password: '',
            email: '',
        }
    }
}

const mapDispatchToProps = dispatch => {
    // debugger;
    return {
        action: user => dispatch(loginUser(user)),
        loginUser: user => dispatch(loginUser(user)),
        clearErrors: () => dispatch(clearErrors()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);