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
        // debugger;
        this.props.action(this.state)
            .then(() => this.props.history.push(`/profile`));
    }

    render() {
        let name = '';
        // debugger;
        if (this.props.formType === 'Signup'){
            // debugger;
            name =  <div>
                        <label>
                            First Name:
                            <input 
                                type="text"
                                value={this.state.first_name}
                                onChange={this.update('first_name')}
                            />
                        </label>
                        <br/>
                        <label>
                            Last Name:
                            <input 
                                type="text"
                                value={this.state.last_name}
                                onChange={this.update('last_name')}
                            />
                        </label>
                        <br/>
                    </div>
        }

        return (
            <div className='session-form'>
                <h2 className='session-header'>{this.props.formType}</h2>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    {name}
                    <label>
                        Email:
                        <input 
                            type="text" 
                            value={this.state.email}
                            onChange={this.update('email')}
                        />
                    </label>
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