import React from 'react';

class WalkGraph extends React.Component {
    render() {
        const { walk, walks, last } = this.props
        // debugger;
        const d = new Date();
        const month = d.getMonth();
        const day = d.getDate();
        const year = d.getFullYear();
        const date = `${month+1}/${day}/${year}`;
        if(!walk || Object.keys(walks).length === 0){
            walk = {date: date}
        }
        return(
            <li className='bargraph-date' key={walk.id}>{`${last(walk.date,5)}-${walk.date.slice(2).substring(0 , walk.date.length - 8)}`}</li>
        )
    }
}

export default WalkGraph;