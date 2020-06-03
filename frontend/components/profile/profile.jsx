import React from 'react';

class Profile extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        // debugger;
        const display = this.props.currentUser ? (
            <span>
                <h1>{this.props.currentUser.email}</h1>
                <button onClick={this.props.logoutUser}>SIGN OUT</button>
            </span>
        ) : (
            <span>
            </span>
        )
        return(
            <div className='profile'>
                <br/>
                {display}
            </div>
        )
    }
}

export default Profile;