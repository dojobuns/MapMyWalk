import React from 'react';
import { BarChart, Bar, CartesianGrid, YAxis, XAxis } from 'recharts';
import WalkGraph from './walk_graph';

class TotalWalks extends React.Component {

    constructor(props){
        super(props);
        this.last = this.last.bind(this);
    }

    last(array, n) {
        // debugger;
        if (array == null) 
          return void 0;
        if (n == null) 
           return array[array.length - 1];
        return array.slice(Math.max(array.length - n, 0));  
    };
    
    // lastLetters(str, n) {
        //     if(n == null)
        //         return str[str.length - 1];
        //     return str.slice(Math.)
        // }
        
        render () {
            // debugger;
            let arr = [];
            let sortedDateArr = [];
            let walkArr = Object.values(this.props.walks);

            // walkArr.forEach(walk => {
                // walk.date = new Date(walk.date);
            // });

            let sortedDates = walkArr.sort((a,b) => new Date(b.date) - new Date(a.date))
            // debugger;

            // walkArr.forEach(walk => {
            //     debugger;
            //     const d = walk.date
            //     const month = d.getMonth();
            //     const day = parseFloat(d.getDate() + 0.5);
            //     const year = d.getFullYear();
            //     const date = `${month+1}-${parseInt(day)}-${year}`;
            //     walk.date = date;
            // })


            // walkArr.forEach(walk => {
            //     debugger;
            //     const d = walk.date
            //     const month = d.getMonth();
            //     const day = d.getDate();
            //     const year = d.getFullYear();
            //     const date = `${month+1}-${day+1}-${year}`;
            //     walk.date = date;
            // })
            
            sortedDates = sortedDates.reverse();

            let walkData = this.last(sortedDates, 5);

            // walkData = walkData.reverse();

            // walkData.forEach(walk => {
            //     walk.date = walk.date.slice(1);
            // })
            // debugger;
            
            ///////////////////////////////////////////////////////////////////////////////
            // walkArr.forEach(walk => {
            //     let date = new Date(`${this.last(walk.date,5)}-${walk.date.slice(2).substring(0 , walk.date.length - 8)}`)
            //     walk.date = date.getTime();
            //     arr.push(walk.date);
            // }) 
            
            // debugger;
            
            // arr.sort();
            
            // debugger;
            
            // arr.forEach(date => {
            //     let check = true;
            //     walkArr.forEach(walk => {
            //         if(check){
            //             if(walk.date === date){
            //                 sortedDateArr.push(walk);
            //                 check = false;
            //             }    
            //         }
            //     })
            // })
            
            // debugger;
            
            // let walkData = this.last(sortedDateArr, 7);
            
            // debugger;
            
            const renderLineChart = (
                <BarChart width={660} height={250} data={walkData}>
            <Bar type="monotone" dataKey="distance" fill="#7cc5f5" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey='date' />
            <YAxis />
          </BarChart>
        );
        
        
        
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
        
        
        if(!walkData){
            return null;
        }
        
        return (
            
            <div className='dashboard'>
                <div className ='dashboard-information'>
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
                <button className='dashboard-distance-mi'>Distance(mi)</button>
                <div className='linechart'>
                    <div className='barchart'>
                        {renderLineChart}
                    </div>
                </div>
                {/* <ul className='bargraph-dates'>
                    {walkData.map(walk => (
                        <WalkGraph walk={walk} walks={walks} last={this.last} key={walk.id} />
                    ))}
                </ul> */}
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