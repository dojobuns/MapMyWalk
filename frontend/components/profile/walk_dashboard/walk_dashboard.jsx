import React from 'react';
import WalkItem from './walk_items';
import TotalWalksContainer from './total_walks_container';
import { selectAllWalks } from '../../../reducers/selectors';

class WalkDashboard extends React.Component {
    constructor(props){
        super(props);
        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(e) {
        let tabArr = ['activity-feed', 'my-dashboard', 'all-day'];
        const i = tabArr.indexOf(e.currentTarget.className);
        tabArr.splice(i, 1);
        // debugger;
        let activeTab = document.getElementByClassName(e.currentTarget.className);
        let hideTab1 = document.getElementByClassName(tabArr[0]);
        let hideTab2 = document.getElementsByClassName(tabArr[1]);
        // debugger;
    }

    render(){
        // debugger;
        let { walks } = this.props
        let recentWalk = 0;
        if(walks === undefined || Object.keys(walks).length === 0){
            recentWalk = this.props.emptyWalk;
        } else {
            walks = Object.values(walks);
            recentWalk = walks[walks.length - 1];
        }

        

        return(
            <div>
                <div className='tab-toggle'>
                    {/* <button className='activity-feed' onClick={this.changeTab}>ACTIVITY FEED</button> */}
                    <button className='my-dashboard'>MY DASHBOARD</button>
                    {/* <button className='all-day' onClick={this.changeTab}>24 / 7</button> */}
                </div>
            <div className='dashboard-stuff dashboard-toggle-2'>
                <div className='total-walks'>
                    <TotalWalksContainer walks={walks} />
                </div>
                <div className='walk-dashboard-component'>
                    <ul style={{ listStyle: "none inside" }}>
                        <WalkItem recentWalk={recentWalk} />
                    </ul>
                </div>
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

}
 // doesnt work on first log in????????? WHY FIX THIS

 // doesnt work on first load of login FIX THIS


export default WalkDashboard;