import React from 'react';

class MostRecentWalk extends React.Component {
    render () {
        const { recentWalk } = this.props
        // debugger;
        return (
            <div>
                <h1 className='recent-walk-header'>Most Recent Walk</h1>
                <li>{recentWalk.map}</li>
                <li>{`Date: ${recentWalk.date}`}</li>
                <li>
                    {`Start Coordinates: latidude-${recentWalk.start_lat} longitude-${recentWalk.start_long}`}
                </li>
                <li className='last-li'>
                    {`End Coordinates: latidude-${recentWalk.end_lat} longitude-${recentWalk.end_long}`}
                </li>
            </div>
        )
    }
}

export default MostRecentWalk;