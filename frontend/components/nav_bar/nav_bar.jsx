import React from 'react';
import { Link } from 'react-router-dom';
// import logo from 'images/mmrlogo.png';

class NavBar extends React.Component{

    render(){
        return(
            <div className='nav-bar'>

                <Link to='/'>
                    <img src={window.mmrlogo} className='logo' height='18' width='163.8' />
                </Link>

                

                <a href="https://www.linkedin.com/in/cliffordyan/" className='linkedin nav-bar-item'>LinkedIn</a>
                <a href="https://github.com/dojobuns" className='github nav-bar-item'>Github</a>
                <a className='challenges-nav nav-bar-item'>Routes</a>
                <a className='go-mvp-nav nav-bar-item'>Go MVP</a>
                <a className='blog-nav nav-bar-item'>Blog</a>
                <a className='shop-nav nav-bar-item'>Shop</a>

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
                
            </div>
        )
    }
}

export default NavBar;