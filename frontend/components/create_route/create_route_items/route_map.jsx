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
        this.removeMarker = this.removeMarker.bind(this);
        this.removeAll = this.removeAll.bind(this);
        this.addMarker = this.addMarker.bind(this);
        this.state = { duration: 0, distance: 0, lastDurationLeg: 0, lastDistanceLeg: 0 };
        this.remove = false;
        this.reset = false;
        this.snappedMarker = 0;
        this.roadSnappedLatLng = 0;
    }
    
    componentDidMount() {
        // debugger;

        const mapOptions = {
          center: { lat: 40.9148209, lng: -74.383763 },
          zoom: 15,
          styles: this.props.mapStyles
        };

        this.directionsService = new google.maps.DirectionsService(); 
        // debugger;
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
            debugger;
            // path.push(e.latLng)
            this.addMarker(e.latLng);
            // this.directionsDisplay.setMap(this.map);     
            // debugger;
        });
        
    }
    
    calculateAndDisplayRoute(directionsService, directionsDisplay) {
        let that = this;
        let steps = this.markers.slice(1, this.markers.length - 1 ).map(marker => ({location: marker.position, stopover: true})) || [];
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
                let constRouteLeg = response.routes[0].legs.length - 1;
                let lastDurationRouteLeg = parseFloat(response.routes[0].legs[constRouteLeg].duration.text.slice(0.4));
                let lastDistanceRouteLeg = parseFloat(response.routes[0].legs[constRouteLeg].distance.text.slice(0.4))
                // debugger;
                if(response.routes[0].legs[constRouteLeg].distance.text.includes('ft')) {
                    // debugger;
                    lastDistanceRouteLeg = parseFloat((lastDistanceRouteLeg / 5280).toFixed(2));
                }

                if(response.routes[0].legs[constRouteLeg].duration.text.includes('hour')){
                    lastDurationRouteLeg = parseFloat((lastDurationRouteLeg * 60).toFixed(2));
                }

                if(that.remove){
                    // debugger;
                    that.setState({duration: that.state.duration -= that.state.lastDurationLeg});
                    that.setState({distance: that.state.distance -= that.state.lastDistanceLeg});
                    this.remove = false;
                    // debugger;
                } else {
                        // debugger;
                    that.setState({duration: that.state.duration += lastDurationRouteLeg});
                    that.setState({distance: that.state.distance += lastDistanceRouteLeg});
                        // debugger;
                }
                // debugger;
                that.setState({lastDurationLeg: lastDurationRouteLeg, lastDistanceLeg: lastDistanceRouteLeg});
                
                if(that.reset){
                    that.directionsDisplay.setMap(that.map)
                    that.reset = false;
                }
                // debugger;
            directionsDisplay.setDirections(response);
            } else {
            window.alert('Directions request failed due to ' + status);
            }
        });
    }

    addMarker(coords){
        let that = this;
        // debugger;
        this.directionsService.route({
            origin: coords,
            destination: coords,
            travelMode: 'WALKING'
        }, (response, status) => {
            // debugger;
            if(status === 'OK') {
                // debugger;
                that.snappedMarker = new google.maps.Marker({
                    position: response.routes[0].legs[0].start_location,
                    map: that.map,
                    icon: window.logo_marker
                })
                that.markers.push(that.snappedMarker);
                // debugger;
                if(that.markers.length > 1) {
                    that.calculateAndDisplayRoute(that.directionsService, that.directionsDisplay);
                }
                if(this.markers.length > 2){
                    // debugger;
                    this.markers[this.markers.length - 2].setMap(null)
                }
            };
        })
        // .then(() => that.markers.push(that.snappedMarker))
// debugger;
        // window.setTimeout((() => that.markers.push(that.snappedMarker)), 2000)
        
        ///////////////////////////////////////////////////////////////////
//         let that = this;
//         // let marker1 = new google.maps.Marker({
//         //     position: coords,
//         //     map: this.map,
//         //     icon: window.logo_marker
//         // });
//         debugger;
//         this.directionsService.route({
//             origin: coords,
//             destination: coords,
//             travelMode: 'WALKING'
//         }, (response, status) => {
//             debugger;
//             if(status === 'OK') {
//                 debugger;
//                 that.roadSnappedLatLng = response.routes[0].legs[0].start_location
//             }
//         })
// debugger;
//         let snappedMarker = new google.maps.Marker({
//             position: this.roadSnappedLatLng,
//             map: this.map,
//             icon: window.logo_marker
//         });

//         this.markers.push(snappedMarker);
//////////////////////////////////////////////////////////////////////////
//         let marker = new google.maps.Marker({
//             position: coords,
//             map: this.map,
//             icon: window.logo_marker
//         });
// // debugger;
//         this.markers.push(marker);
// ///////////////////////////////////////////////////////////////////////////
        
    }
    
    removeMarker() {
        // debugger;
        if(this.markers.length === 0) return;
        this.markers[this.markers.length - 1].setMap(null);
        this.markers.pop();
        this.remove = true;

        this.markers[this.markers.length - 1].setMap(this.map);

        this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay);
    }
    
    removeAll() {
        // debugger;
        if(this.markers.length === 0) return;
        this.markers.forEach(marker => {
            marker.setMap(null)
            // this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay);
        })
        this.markers = [];

        this.directionsDisplay.setMap(null); // REMOVE THE LINES FROM THE DISPLAY????

        this.reset = true;
        // debugger;
        this.setState({ duration: 0, distance: 0, lastDurationLeg: 0, lastDistanceLeg: 0 })
    }

    render() {
        // debugger;
        return(
            <div className='route-map-whole'>
                <RouteSideBarContainer duration={this.state.duration} distance={this.state.distance} />
                
                <div className='map' ref={ map => this.mapNode = map }>
                </div>
                <PanelContainer distance={this.state.distance} removeMarker={this.removeMarker} removeAll={this.removeAll} />
            </div>
        )
    }
}

export default RouteMap;