import React from 'react';

class RouteMap extends React.Component {

    componentDidMount() {
        // set the map to show SF
        const mapOptions = {
          center: { lat: 37.7758, lng: -122.435 }, // this is SF
          zoom: 13
        };
    
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }

    render() {
        return(
            <div className='route-map' ref={ map => this.mapNode = map }>
                {/* <img src={window.mapplaceholder} alt="" className='route-map-image' /> */}
                {/* <div ref={ map => this.mapNode = map }></div> */}
            </div>
        )
    }
}

export default RouteMap;