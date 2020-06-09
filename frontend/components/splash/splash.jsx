import React from 'react';
// import ashyo from 'images/ash_yo_front_page.png';

import { Link } from 'react-router-dom';

class Splash extends React.Component{
    render(){
        return(
            <div className='front-page'>
                <div className='ashyo-fp'>
                    
                    <img src={window.ash_yo} alt="walking" width='1375'/>
                    <nav>
                        <div className='ash-yo-info'>
                            <h1 className='own-every-step'>OWN EVERY STEP</h1>
                            
                            <h1 className='line-1'>____</h1>
                            <h1 className='line-2'>____</h1>
                            
                            <div className='splash-text-1'>
                                <p>The best walk tracking experience,</p>
                            </div>
                            <div className='splash-text-2'>
                                <p>backed by the world's best</p>
                            </div>
                            <div className='splash-text-3'>
                                <p>coding language, Ruby.</p>
                            </div>

                            <Link to="/signup">
                                <button className='signup-button-splash'>
                                    SIGN UP
                                </button>
                            </Link>
                            <p className='already-walker'>Already a walker?</p>
                            <Link to="/login">
                                <button className='login-button-splash'>
                                    LOG IN
                                </button>
                            </Link>
                        </div>
                    </nav>
                </div>
                <div className='splash-bottom-align'>
                    <div className='walk-nonsense'>
                        <h1 className='nonsense-header'>Create Walks</h1>
                        <p className='nonsense-text'>Be able to map out a walking path</p>
                        <p className='nonsense-text'>anywhere in the world! Map out a </p>
                        <p className='nonsense-text nonsense-last'>nice night stroll or comfortable afternoon walk!</p>
                        <h1 className='nonsense-header'>Get Social</h1>
                        <p className='nonsense-text'>Find friends on our site and walk </p>
                        <p className='nonsense-text'>together. Cheer each other on. </p>
                        <p className='nonsense-text nonsense-last'>Walking is awesome with a buddy!</p>
                        <h1 className='nonsense-header'>Walk Faster</h1>
                        <p className='nonsense-text'>Our site guarantees to be able to </p>
                        <p className='nonsense-text'>speed up your walking time by at least </p>
                        <p className='nonsense-text'>double the speed. Walk at paces that </p>
                        <p className='nonsense-text nonsense-last'>you've never walked before!</p>
                    </div>
                    <div className='splash-examples'>
                        <img src={window.splash_example_1} className='splash-example-1' width='360' alt=""/>
                        <img src={window.splash_example_2} className='splash-example-2' width='430' alt=""/>
                        <img src={window.logo} className='splash-example-3' width='470' alt=""/>
                    </div>
                    <div className='splash-wonky'>
                        <img src={window.splash_wonky} alt=""/>
                    <img src={window.logo} className='little-logo' alt=""/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Splash;