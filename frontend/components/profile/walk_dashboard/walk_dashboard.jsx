import React from 'react';
import WalkItem from './walk_items';

class WalkDashboard extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // debugger;
        this.props.fetchWalks();
        // this.props.fetchCurrentUser();
    }
    
    render(){
        const { user } = this.props.currentUser
        // console.log(walks);
        return(
            <div className='walk-dashboard-component'>
                <ul style={{ listStyle: "none inside" }}>
                    {user.walks.map((walkId, i) => (
                        <WalkItem walk={this.props.walks[walkId]} key={walkId} idx={i + 1}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default WalkDashboard;