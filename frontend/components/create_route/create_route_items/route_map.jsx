import React from 'react';
import PanelContainer from './panel_container';
import RouteSideBarContainer from './route_side_bar_container';
class RouteMap extends React.Component {

    constructor(props){
        super(props);
        this.markers = [];
        this.walk = this.props.walk;
        this.duration = this.walk.duration;
        this.distance = this.walk.distance;
        this.calculateAndDisplayRoute = this.calculateAndDisplayRoute.bind(this);
        this.state = { duration: 0, distance: 0 };
    }
    
    componentDidMount() {
        // debugger;

        const mapOptions = {
          center: { lat: 40.9148209, lng: -74.383763 },
          zoom: 17,
          styles: this.props.mapStyles
        };

        this.directionsService = new google.maps.DirectionsService(); 

        // this.poly = new google.maps.Polyline({
        //     strokeColor: '#000000',
        //     strokeOpacity: 1.0,
        //     strokeWeight: 3
        //   });
        this.directionsDisplay = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
            polylineOptions: { strokeColor: "#9eff98", strokeWeight: 8 } ,
            preserveViewport: true 
        }); 

        this.map = new google.maps.Map(this.mapNode, mapOptions);

        // this.poly.setMap(this.map);
        this.directionsDisplay.setMap(this.map);

        google.maps.event.addListener(this.map, 'click', (e) => {
            // var path = this.poly.getPath();
            // path.push(e.latLng)
            this.addMarker(e.latLng);
            this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay);
            // debugger;
        });
        
    }
    
    calculateAndDisplayRoute(directionsService, directionsDisplay) {
        let that = this;
        let steps = this.markers.slice(1, this.markers.length - 1 ).map(marker => ({location: marker.position, stopover: true})) || [];
        // debugger;
        if(this.markers.length > 1) {
            // debugger;
            directionsService.route({
                origin: this.markers[0].position,
                waypoints: steps,
                destination: this.markers[this.markers.length - 1].position,
                travelMode: 'WALKING'
            }, (response, status) => {
                // debugger;
                if (status === 'OK') {
                    // debugger;
                    that.setState({duration: that.state.duration += parseFloat(response.routes[0].legs[response.routes[0].legs.length - 1].duration.text.slice(0.4))});
                    that.setState({distance: that.state.distance += parseFloat(response.routes[0].legs[response.routes[0].legs.length - 1].distance.text.slice(0.4))});
                    // debugger;
                directionsDisplay.setDirections(response);
                } else {
                window.alert('Directions request failed due to ' + status);
                }
            });
        }
    }

    addMarker(coords){
        let marker = new google.maps.Marker({
            position: coords,
            map: this.map,
            icon: window.logo_marker
        });

        this.markers.push(marker);
    };
    
    render() {
        // debugger;
        return(
            <div className='route-map-whole'>
                <RouteSideBarContainer duration={this.state.duration} distance={this.state.distance} />
                
                <div className='map' ref={ map => this.mapNode = map }>
                </div>
                <PanelContainer distance={this.state.distance} />
            </div>
        )
    }
}

export default RouteMap;