import React from 'react';
import WalkItem from './walk_items';
import MostRecentWalk from './most_recent_walk';

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
        // console.log(user.walks);
        // debugger;
        return(
            <div>
                <ul>
                    <div className='recent-walk'>
                        <MostRecentWalk recentWalk={this.props.walks[user.walks[user.walks.length - 1]]} />
                    </div>
                </ul>
                <div className='walk-dashboard-component'>
                    <ul style={{ listStyle: "none inside" }}>
                        {user.walks.map((walkId, i) => (
                            <WalkItem walk={this.props.walks[walkId]} key={walkId} idx={i + 1}/>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
 // doesnt work on first log in????????? WHY FIX THIS
export default WalkDashboard;