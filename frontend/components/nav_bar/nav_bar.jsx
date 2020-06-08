import React from 'react';
import { Link } from 'react-router-dom';

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

                

                <a href="https://www.linkedin.com/in/cliffordyan/" className='linkedin nav-bar-item'>LinkedIn</a>
                <a href="https://github.com/dojobuns" className='github nav-bar-item'>Github</a>
                <a className='challenges-nav nav-bar-item'>Routes</a>
                <a className='go-mvp-nav nav-bar-item'>Go MVP</a>
                <a className='blog-nav nav-bar-item'>Blog</a>
                <a className='shop-nav nav-bar-item'>Shop</a>

                {signinLoginButtons}

                {tinyProPic}
            </div>
        )
    }
}

export default NavBar;