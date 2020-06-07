import React from 'react';
import WalkItem from './walk_items';
import TotalWalks from './total_walks';

class WalkDashboard extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // debugger;
        this.props.fetchWalks();
        // this.props.fetchUsers();
    }
    
    render(){
        return(
            <div>
                <div className='total-walks'>
                    <TotalWalks />
                </div>
                    <div className='walk-dashboard-component'>
                        <ul style={{ listStyle: "none inside" }}>
                            <WalkItem />
                        </ul>
                    </div>
            </div>
        )


////////////////////////////////////////////////////////////////////////////////////////////////

        // const { user, walks } = this.props.currentUser

        // if(walks === undefined) {
        //     walks = this.props.emptyWalk;
        // }

        // const allWalks = <WalkItem walk={walks[user.walks[user.walks.length - 1]]} />
        
        // return(
        //     <div>
        //         <ul>
        //             <div className='total-walks'>
        //                 <TotalWalks recentWalk={walks[user.walks[user.walks.length - 1]]} />
        //             </div>
        //         </ul>
        //         <h1 className='recent-walk-header'>RECENT WALK</h1>
        //         <div className='walk-dashboard-component'>
        //             <ul style={{ listStyle: "none inside" }}>
        //                 {allWalks}
        //             </ul>
        //         </div>
        //     </div>
        // )
    }
} // doesnt work on first load of login FIX THIS

export default WalkDashboard;