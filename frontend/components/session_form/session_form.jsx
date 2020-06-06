import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemo = this.loginDemo.bind(this);
    }

    update(field){
        return e => this.setState( { [field]: e.currentTarget.value } );
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger;
        this.props.action(this.state)
            .then(() => this.props.history.push(`/profile`));
    }

    loginDemo(e) {
        e.preventDefault();
        // debugger;
        const demoUser = { email: 'clifford.syan@gmail.com', password: 'password' };

        this.props.loginUser(demoUser)
            .then(() => this.props.history.push('/profile'));
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {
        
        let firstNameError = '';
        let lastNameError = '';
        let emailError = '';
        let passwordError = '';
        let credentialError = '';
        // debugger;

        // console.log(this.props.errors.responseJSON)

        if(this.props.errors.responseJSON) {
            this.props.errors.responseJSON.forEach(error => {
               
                error = JSON.stringify(error);

                if(error.includes('First')) {

                    firstNameError = error;
                    // console.log(firstNameError.length)
                } else if(error.includes('Last')) {

                    lastNameError = error;
                } else if(error.includes('Email')) {

                    emailError = error;
                } else if(error.includes('Password')) {

                    passwordError = error;
                } else if(error.includes('credentials')) {

                    credentialError = error;
                }
            })
        }

        let name = '';
        let signupButton = '';
        let date = '';

        if (this.props.formType === 'Signup'){

            date =
            <span>
                <input 
                    type="date" 
                    className='dob' 
                    value={this.state.dob}
                    onChange={this.update('dob')}
                />

                <br/>

                <div className='male-label'>Male</div>
                <div className='female-label'>Female</div>

                <label className='radio-label male'>
                    <input type="radio" className='custom-radios signup-radio-button' name="gender" id="male" value='m' onChange={this.update('gender')}></input>
                </label>

                <label className='radio-label'>
                    <input type="radio" className='custom-radios signup-radio-button' name="gender" id="female" value='f' onChange={this.update('gender')}></input>
                </label>

                <br/>

            </span>

            signupButton =
                <Link to="/login">
                    <button className='signup-page-login-button'>
                        LOG IN
                    </button>
                </Link>

            name =  <div>
                        <label>
                            <input 
                                type="text"
                                value={this.state.first_name}
                                placeholder=' First Name'
                                onChange={this.update('first_name')}
                                className={firstNameError.length > 0 ? 'input-error' : 'input-box-session'}
                            />
                        </label>
                        <p className='error'>{firstNameError}</p>
                        <br/>
                        <label>
                            <input 
                                type="text"
                                value={this.state.last_name}
                                placeholder=' Last Name'
                                onChange={this.update('last_name')}
                                className={lastNameError.length > 0 ? 'input-error' : 'input-box-session'}
                            />
                        </label>
                        <p className='error'>{lastNameError}</p>
                        <br/>
                    </div>
        } else {
            signupButton = 
            <Link to="/signup">
                <button className='login-page-signup-button'>
                    SIGN UP
                </button>
            </Link>
        }

        return (
            <div className='session-form'>

                {signupButton}
                <br/>
                <button type='submit' onClick={this.loginDemo} className='session-demo-button'>DEMO TRY OUT</button>
                <br/>

                <hr className='or-hr-1' />

                <p className='or-separator'> OR </p>

                <hr className='or-hr-2' />

                <br/>
                <form onSubmit={this.handleSubmit}>
                    {name}
                    
                    <label>
                        <input 
                            type="text" 
                            value={this.state.email}
                            placeholder=' Email'
                            onChange={this.update('email')}
                            className={emailError.length > 0 || credentialError.length > 0 ? 'input-error' : 'input-box-session'}
                        />
                    </label>

                <p className='error'>{emailError}</p>

                    <br/>
                    <label>
                        <input 
                            type="password"
                            value={this.state.password}
                            placeholder=' Password'
                            onChange={this.update('password')}
                            className={passwordError.length > 0 || credentialError.length > 0 ? 'input-error' : 'input-box-session'}
                        />
                    </label>
                {passwordError.length === 0 ? <p className='error'>{credentialError}</p> : <p className='error'>{passwordError}</p>}
                    <br/>
                    {date}
                    <button type='submit' className='session-login-button'>{this.props.formType}</button>
                </form>
            </div>
        )
    }
}

export default SessionForm;