import React from 'react';

class TotalWalks extends React.Component {
    render () {
        // const { recentWalk } = this.props
        // debugger;
        return (

            <div>
                <h1 className='total-walks-header'>Total Walk</h1>
            </div>

            ///////////////////////////////////////////////////////////////////////////
            // <div>
            //     <h1 className='total-walks-header'>Most Recent Walk</h1>
            //     <li>{recentWalk.location}</li>
            //     <li>{`Date: ${recentWalk.date}`}</li>
            //     <li>
            //         {`Start Coordinates: latidude-${recentWalk.start_lat} longitude-${recentWalk.start_long}`}
            //     </li>
            //     <li className='last-li'>
            //         {`End Coordinates: latidude-${recentWalk.end_lat} longitude-${recentWalk.end_long}`}
            //     </li>
            // </div>
        )
    }
}

export default TotalWalks;