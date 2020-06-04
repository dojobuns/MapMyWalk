import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { 
    signupUser,
    loginUser,
    clearErrors,
} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
    // debugger;
    return {
        errors: state.errors.session,
        formType: 'Signup',
        user: {
            first_name: '',
            last_name: '',
            password: '',
            email: '',
            dob: '',
            gender: '',
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        action: user => dispatch(signupUser(user)),
        loginUser: user => dispatch(loginUser(user)),
        clearErrors: () => dispatch(clearErrors()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);