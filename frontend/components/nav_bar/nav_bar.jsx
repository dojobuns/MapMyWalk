import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../../app/assets/images/mmrlogo.png';

class NavBar extends React.Component{

    render(){
        return(
            <div className='nav-bar'>

                <h1 className='logo'>Map My Walk</h1>

                {/* <img src={logo} /> */}

                <a className='training-nav nav-bar-item'>Training</a>
                <a className='routes-nav nav-bar-item'>Routes</a>
                <a className='challenges-nav nav-bar-item'>Challenges</a>
                <a className='go-mvp-nav nav-bar-item'>Go MVP</a>
                <a className='blog-nav nav-bar-item'>Blog</a>
                <a className='shop-nav nav-bar-item'>Shop</a>

                <nav className="login-signup">
                    <Link to="/login" activeClassName='login-button'>
                    <button className='login-button'>
                        LOG IN
                    </button>
                    </Link>

                    <Link to="/signup" activeClassName='signup-button'>
                    <button className='signup-button'>
                        SIGN UP
                    </button>
                    </Link>
                </nav>

            </div>
        )
    }
}

export default NavBar;