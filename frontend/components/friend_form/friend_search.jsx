import React from 'react';

class FriendSearch extends React.Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        debugger;
        this.props.friendSearch()
    }

    render() {
        return(
            <div className='friend-search'>
                Search for friends!
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder='Find your friends'/>
                    <button type='submit'>Search</button>
                </form>
            </div>
        )
    }
}

export default FriendSearch;