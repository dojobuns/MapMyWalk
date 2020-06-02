import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signupUser } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Signup',
        navLink: <Link to='/login'>Do you have an account? Log in here!</Link>,
        user: {
            username: '',
            password: '',
            email: '',
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        action: user => dispatch(signupUser(user)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);