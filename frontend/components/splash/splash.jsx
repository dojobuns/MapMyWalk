import React from 'react';
import ashyo from 'images/ash_yo_front_page.png';

import { Link } from 'react-router-dom';

class Splash extends React.Component{
    render(){
        return(
            <div>
                <div className='ashyo-fp'>
                    
                    <img src={ashyo} alt="walking" width='1375'/>
                    <nav>
                        
                        <h1 className='own-every-step'>OWN EVERY STEP</h1>
                        
                        <h1 className='line-1'>___</h1>
                        <h1 className='line-2'>___</h1>
                        
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
                    </nav>
                </div>
            </div>
        )
    }
}

export default Splash;