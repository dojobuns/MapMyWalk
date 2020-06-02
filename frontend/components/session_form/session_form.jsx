import React from 'react';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => this.setState( { [field]: e.currentTarget.value } );
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    render() {
        let email = '';
        // debugger;
        if (this.props.formType === 'Signup'){
            // debugger;
            email = <span>
                <br/>
            <label>
                Email:
                <input 
                    type="text" 
                    value={this.state.email}
                    onChange={this.update('email')}
                />
            </label>
            </span>
        }

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {this.props.formType}
                    <br/>
                    <label>
                        Username:
                        <input 
                            type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                        />
                    </label>
                    {email}
                    <br/>
                    <label>
                        Password:
                        <input 
                            type="text"
                            value={this.state.password}
                            onChange={this.update('password')}
                        />
                    </label>
                    <br/>
                    <button type='submit'>{this.props.formType}</button>
                </form>
            </div>
        )
    }
}

export default SessionForm;