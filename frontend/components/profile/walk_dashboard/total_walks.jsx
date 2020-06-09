import React from 'react';

class TotalWalks extends React.Component {
    render () {
        const { walks } = this.props;
        let totalDistance = 0;
        let totalDuration = 0;
        let totalCalories = 0;
        const walksArr = Object.values(walks);
        let totalWalks = walksArr.length;
        for (let i = 0; i < walksArr.length; i++) {
            totalDistance += walksArr[i].distance;
            totalDuration += walksArr[i].duration;
            // totalCalories += walksArr[i].calories;
        }

        totalDuration = parseFloat(totalDuration / 60);
        totalDuration = totalDuration.toFixed(2);

        return (

            <div className='dashboard'>
                <div className='dashboard-info dashboard-distance'>
                    <div className='distance-header dashboard-header'>
                        DISTANCE
                    </div>
                    <div className='dashboard-numbers'>
                        {totalDistance.toFixed(2)}
                    </div>
                    <div className='dashboard-units'>
                        miles
                    </div>
                </div>
                <div className='dashboard-info dashboard-duration'>
                    <div className='duration-header dashboard-header'>
                        DURATION
                    </div>
                    <div className='dashboard-numbers'>
                        {totalDuration}
                    </div>
                    <div className='dashboard-units'>
                        hours
                    </div>
                </div>
                <div className='dashboard-info dashboard-calories'>
                    <div className='calories-header dashboard-header'>
                        CALORIES
                    </div>
                    <div className='dashboard-numbers'>
                        2491
                    </div>
                    <div className='dashboard-units'>
                        burned
                    </div>
                </div>
                <div className='dashboard-info dashboard-walks'>
                    <div className='walks-header dashboard-header'>
                        WALKS
                    </div>
                    <div className='dashboard-numbers'>
                        {totalWalks}
                    </div>
                    <div className='dashboard-units'>
                        completed
                    </div>
                </div>
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