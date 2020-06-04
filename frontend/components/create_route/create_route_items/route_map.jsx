import React from 'react';

class RouteMap extends React.Component {
    render() {
        return(
            <div className='route-map'>
                <img src={window.mapplaceholder} alt="" className='route-map-image' />
            </div>
        )
    }
}

export default RouteMap;