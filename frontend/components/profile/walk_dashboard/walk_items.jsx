import React from 'react';

class WalkItem extends React.Component {
    render() {
        const { walk, idx } = this.props;
        debugger;
        return(
            <div>
                <li>{idx}: {`Location: ${walk.map}`}
                </li>
                <li>
                    {`Start Coordinates: latidude-${walk.start_lat} longitude-${walk.start_long}`}
                </li>
                <li className='last-li'>
                    {`End Coordinates: latidude-${walk.end_lat} longitude-${walk.end_long}`}
                </li>
            </div>
        )
    }
}

export default WalkItem;