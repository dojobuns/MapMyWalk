import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
    // debugger;
    return {
        errors: state.errors.session,
        formType: 'Login',
        navLink: <Link to='/signup'>No account? Sign up here!</Link>,
        user: {
            password: '',
            email: '',
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        action: user => dispatch(loginUser(user)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);