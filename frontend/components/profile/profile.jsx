import React from 'react';
import WalkDashBoardContainer from './walk_dashboard/walk_dashboard_container';
import { capitalize } from '../../util/helper_util';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchWalks()
        // debugger;
    }

    render(){
        
        let { walks } = this.props
        let totalDistance = 0;
        const walksArr = Object.values(walks);
        
        for (let i = 0; i < walksArr.length; i++) {
            totalDistance += walksArr[i].distance;
        }

        const current_user = this.props.currentUser
        const display = this.props.currentUser ? (
            <span className='profile-display'>
                <img src={window.cy_profile_pic} alt="" width='101' />
                <h1 className='profile-name'>{`${capitalize(current_user.first_name)} ${capitalize(current_user.last_name)}`}</h1>
                <h1 className='long-beach'>Long Beach, NY</h1>
                <div className='profile-line-1'></div>
                <div className='mile-total'>
                    <div className='mile-total-number'>{totalDistance}</div>
                    <div className='total-miles-text'>
                        <div className='total-text'>TOTAL</div> 
                        <div className='miles-text'>MILES</div>
                    </div>
                </div>
                <div className='profile-buttons-friends'>
                    <button className='edit-profile'>Edit Profile</button>
                    <button className='find-friends'>Find Friends</button>
                </div>
                <div className='ua-box'></div>
                <div className='triple-box'>
                    <div className='achievements'>achievement</div>
                    <div className='personal-statement'>personal statement</div>
                    <div className='profile-about-me'>profile about me</div>
                </div>
                <div className='gear-tracker'>gear tracker</div>
                <div className='challenges'>challenges</div>
            </span>
        ) : (
            <span>
            </span>
        );
        // debugger;
        const dashboard = <WalkDashBoardContainer currentUser={current_user} />

        return(
            <div>
                <div className='profile'>
                {/* <div className='hidey-box'></div> */}
                <span>
                    {/* <div className='profile-drop-down'>
                        <img src={window.cy_profile_pic} alt="" width='34' className='tiny-pro-pic'/>
                    </div> */}
                    
                </span>
                    <br/>
                    {display}
                    <br/>
                    {dashboard}
                </div>
            </div>
        )
    }
}

export default Profile;