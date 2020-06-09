import React from 'react';
import { Link } from 'react-router-dom'

class NavJr1 extends React.Component {
    render(){
        return (
            <div>
                <div className='nav-jr-1'>
                    <Link to='/route/create'>
                        <button className='create-route-button nav-jr-button btn'>Create Route</button>
                    </Link>
                    <Link to='/walk/create'>
                        <button className='log-workout-button nav-jr-button btn'>Log Workout</button>
                    </Link>
                    <button className='import-workout-button nav-jr-button btn'>Import Workout</button>
                    <button className='create-a-goal nav-jr-button btn'>Create a Goal</button>
                </div>
                    <div className='nav-jr-line-1'></div>
            </div>
        )
    }
}

export default NavJr1;