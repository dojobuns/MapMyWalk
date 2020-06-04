import React from 'react';
import { Link } from 'react-router-dom'

class NavJr extends React.Component {
    render(){
        return (
            <div className='nav-jr'>
                <Link to='/route/create'>
                    <button className='create-route-button nav-jr-button'>Create Route</button>
                </Link>
                <button className='log-workout-button nav-jr-button'>Log Workout</button>
                <button className='import-workout-button nav-jr-button'>Import Workout</button>
                <button className='create-a-goal nav-jr-button'>Create a Goal</button>
            </div>
        )
    }
}

export default NavJr;