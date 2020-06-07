import React from 'react';

class Footer extends React.Component {
    render() {
        return(
            <div>
                    <img src={window.mmw_logo_text} className='footer-logo' alt=""/>
                    <button className='footer-walk footer-button'>W a l k</button>
                    <button className='footer-stroll footer-button'>S t r o l l</button>
                    <button className='footer-strut footer-button'>S t r u t</button>
                <div className='footer-sr'>
                </div>
                <img src={window.logo} className='footer-route-image' width='240' alt=""/>
                <div className='footer'>
                    <div className='sections'>
                        <h1 className='footer-header'>SOCIAL</h1>
                        <p>Like us on Facebook</p>
                        <p>Follow us on Twitter</p>
                        <p>MapMyWalk Blog</p>
                    </div>
                    <div className='sections'>
                        <h1 className='footer-header'>HELP</h1>
                        <p>I don't know</p>
                        <p>What?</p>
                        <p>Huh?</p>
                    </div>
                    <div className='sections'>
                        <h1 className='footer-header'>ABOUT US</h1>
                        <p>Advertise</p>
                        <p>Please hire me</p>
                        <p>Be my friend</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;