import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NavBar extends React.Component{

    render(){
        const signinLoginButtons = this.props.currentUser ? (
            <nav className="login-signup">
                    <div className='invis-login-button'>
                    </div>

                    <div className='invis-signup-button'>
                    </div>
                </nav>
        ) : (
            <nav className="login-signup">
                    <Link to="/login">
                    <button className='login-button'>
                        LOG IN
                    </button>
                    </Link>

                    <Link to="/signup">
                    <button className='signup-button'>
                        SIGN UP
                    </button>
                    </Link>
                </nav>
        )
            // debugger;
        const tinyProPic = this.props.currentUser ? (
            <div className="dropdown">
                    <img src={window.cy_profile_pic} alt="" width='34' className='tiny-pro-pic dropbtn'/>
                        <div className="dropdown-content">
                            <Link to='/profile' className='dropdown-box'>Home</Link>
                            <a href="https://www.linkedin.com/in/cliffordyan/" className='dropdown-box'>LinkedIn</a>
                            <a href="https://github.com/dojobuns" className='dropdown-box'>GitHub</a>
                            <a href="#" onClick={this.props.logoutUser} className='dropdown-box'>Logout</a>
                        </div>
                    </div>
        ) : (
            <span></span>
        )

        return(
            <div className='nav-bar'>

                <Link to='/'>
                    <img src={window.mmw_logo_text} className='logo' width='170px' />
                </Link>
                

                <FontAwesomeIcon icon={'walking'} className='nav-icons' />
                <div className="dropdown-1">
                    <Link to='my_routes' className='nav-routes nav-bar-item'>Walks</Link>
                        <div className="dropdown-content-1">
                            <Link to='/route/create' className='dropdown-box-1'>Create Walk</Link>
                            <Link to='/my_walks' className='dropdown-box-1'>My Walks</Link>
                        </div>
                    </div>
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} className='nav-icons' />
                <a href="https://www.linkedin.com/in/cliffordyan/" className='linkedin nav-bar-item'>LinkedIn</a>
                <FontAwesomeIcon icon={['fab', 'github']} className='nav-icons' />
                <a href="https://github.com/dojobuns" className='github nav-bar-item'>Github</a>
                <FontAwesomeIcon icon={['fab', 'instagram']} className='nav-icons' />
                <a href='https://www.instagram.com/teriy.akii/' className='challenges-nav nav-bar-item'>My dog :)</a>

                {signinLoginButtons}

                {tinyProPic}
            </div>
        )
    }
}

export default NavBar;