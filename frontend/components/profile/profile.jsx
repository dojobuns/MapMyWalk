import React from 'react';
import WalkDashBoardContainer from './walk_dashboard/walk_dashboard_container';
import Footer1 from '../footer/footer_container'
import { capitalize } from '../../util/helper_util';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchWalks();
        this.props.fetchUsers();
        debugger;
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
                    <div className='mile-total-number'>{totalDistance.toFixed(2)}</div>
                    <div className='total-miles-text'>
                        <div className='total-text'>TOTAL</div> 
                        <div className='miles-text'>MILES</div>
                    </div>
                </div>
                <div className='profile-buttons-friends'>
                    <button className='edit-profile'>Edit Profile</button>
                    {/* <Link to='/profile/friends/find'> */}
                        <button className='find-friends'>Find Friends</button>
                    {/* </Link> */}
                </div>
                <div className='ua-box'></div>
                <div className='triple-box'>
                    <div className='achievements'>ACHIEVEMENTS</div>
                    <div className='personal-statement'>PERSONAL STATEMENT</div>
                    <div className='profile-about-me'>ABOUT ME</div>
                </div>
                <div className='gear-tracker'>GEAR TRACKER</div>
                <div className='challenges'>CHALLENGES</div>
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
                <div className='footer-1'>
                    <Footer1 />
                </div>
            </div>
        )
    }
}

export default Profile;