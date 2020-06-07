import React from 'react';

class WalkItem extends React.Component {
    render() {
        const date = new Date();
        const month = date.getMonth();
        const day = date.getDate();
        const year = date.getFullYear();
        return (
            <div>
                <h1 className='recent-walk-header'>RECENT WALK</h1>
                <div className='recent-walk-line'></div>
                <img src={window.walking} className='walking' />
                <li className='walk-item-location'>Your Walk</li>
                <li className='walk-item-date'>{`${month+1}/${day}/${year}`}</li>
                <div className='distance-item'>
                    <li className='distance-title'>Distance</li>
                    <li className='walk-item-distance'>0.0</li>
                    <div className='location-separator-line'></div>
                    <li className='distance-mile'>mi</li>
                </div>
                <div className='duration-item'>
                    <li className='walk-item-duration'>Duration</li>
                    <li className='walk-item-duration-dash'>--</li>
                    <div className='duration-separator-line'></div>
                </div>
            </div>
        )



        /////////////////////////////////////////////////////////////////////////////
        // debugger;
        // const { walk } = this.props;
        // if(walk.location === null) {
        //     walk.location = 'Your Walk'
        // } 
        // if(walk.date = undefined){
        //     // walk.date = 
        // }
        // return(
        //     <div>
        //         <img src={window.walking} className='walking' />
        //         <li className='walk-item-location'>{`${walk.location}`}</li>
        //         <li className='walk-item-date'>{`${walk.date}`}</li>
        //         <li className='walk-item-distance'>{`${walk.distance}`}</li>
        //     </div>
        // )
    }
}

export default WalkItem;