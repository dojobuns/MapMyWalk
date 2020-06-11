import React from 'react';
import { Link } from 'react-router-dom'

class NavJr extends React.Component {
    render(){
        return (
            <div>
                <div className='nav-jr'>
                    <Link to='/route/create'>
                        <button className='create-route-button nav-jr-button btn'>Create Route</button>
                    </Link>
                    <Link to='/walk/create'>
                        <button className='log-workout-button nav-jr-button btn'>Log Workout</button>
                    </Link>
                    
                </div>
                <div className='nav-jr-line'></div>
            </div>
        )
    }
}

export default NavJr;