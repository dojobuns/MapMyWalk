import React from 'react';

class WalkItem extends React.Component {
    render() {
        const { recentWalk } = this.props;
        // debugger;
            // const d = recentWalk.date
            // const month = d.getMonth();
            // const day = parseFloat(d.getDate() + 0.5);
            // const year = d.getFullYear();
            // const date = `${month+1}-${parseInt(day)}-${year}`;

        // recentWalk.date = date;

        const walkDuration = ( recentWalk.duration === '--' ) ? (
            recentWalk.duration
        ) : (
            `${recentWalk.duration} m`
        )

        

        return (
            <div>
                <h1 className='recent-walk-header'>RECENT WALK</h1>
                <div className='recent-walk-line'></div>
                <img src={window.walking} className='walking' />
                <li className='walk-item-location'>{recentWalk.location}</li>
                <li className='walk-item-date'>{recentWalk.date}</li>
                <div className='distance-item'>
                    <li className='distance-title'>Distance</li>
                    <li className='walk-item-distance'>{recentWalk.distance}</li>
                    <div className='location-separator-line'></div>
                    <li className='distance-mile'>mi</li>
                </div>
                <div className='duration-item'>
                    <li className='walk-item-duration'>Duration</li>
                    <li className='walk-item-duration-dash'>{walkDuration}</li>
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