import React from 'react';
import WalkDashBoardContainer from './walk_dashboard/walk_dashboard_container';
import { capitalize } from '../../util/helper_util';

class Profile extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        debugger;
        const current_user = this.props.currentUser
        const display = this.props.currentUser ? (
            <span className='profile-display'>
                <img src={window.cy_profile_pic} alt="" width='101' />
                <h1 className='profile-name'>{`${capitalize(current_user.first_name)} ${capitalize(current_user.last_name)}`}</h1>
                <button onClick={this.props.logoutUser} className='profile-signout-button'>SIGN OUT</button>
            </span>
        ) : (
            <span>
            </span>
        );

        const dashboard = <WalkDashBoardContainer />

        return(
            <div>
                <div className='profile'>
                <div className='hidey-box'></div>
                <span>
                <img src={window.cy_profile_pic} alt="" width='34' className='tiny-pro-pic'/>
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