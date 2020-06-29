# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# What does it do?

Uses several different Google Maps APIs together to achieve the functionality of a live map which can tell you the distance and time duration it would take
to walk from point A to point B.  Some difficulties I had with the Google Maps API were being able to get the markers to snap to the roads, live updating the panel
so that you could see how many miles the walk is and adding a remove last marker/removing intermediary markers/clear all markers functionality to the site.  

* To get the markers to snap to the road, I had to play around with the Google Maps Directions API, which is normally used for finding the directions from point A to point B on the road.  But if you use the origin and destination as the same spot, you have access to a latitude/longitude coordinate of the closest road point to your marker where you clicked.  So I used the availability of that point and put a marker down on that spot to get my markers snapping to the roads even if you try pressing off road.  

```javascript
that.snappedMarker = new google.maps.Marker({
    position: response.routes[0].legs[0].start_location,
    map: that.map,
    icon: window.logo_marker
});
```

* For live updating the panel as you clicked, I used the fact that a change in state would trigger a rerender in my react components.  So I stored my variables in my state, and then as you press on the map and draw your route, it adds that information to the old one and uses setState to trigger a rerender with the new information.

```javascript
that.setState({duration: that.state.duration -= that.state.lastDurationLeg});
that.setState({distance: that.state.distance -= that.state.lastDistanceLeg});
```

* To correctly add more functionality for my Google Maps API, I just played around with removing which specified markers at each press of the corresponding buttons or when you press on the map.  The code below checks if the array of markers is more than 2, then you have intermediary markers.  So it takes the most recent intermediary marker and sets it to a null map, effectively removing it from the visible map.

```javascript
if(this.markers.length > 2){
    this.markers[this.markers.length - 2].setMap(null)
}
```

* Removing the last marker I would set the last marker's map to null as well, removed it from the array of existing markers, set the marker that preceded that removed one's map back to the visible map, and then redrew and calculated the route so that it rerenders the component

```javascript
removeMarker() {
    if(this.markers.length === 0) return;
    this.markers[this.markers.length - 1].setMap(null);
    this.markers.pop();
    this.remove = true;

    this.markers[this.markers.length - 1].setMap(this.map);

    this.calculateAndDisplayRoute(this.directionsService, this.directionsDisplay);
}
```

* To get the map to clear all the markers, I did a work around of setting the map to null, redrawing the points on a null map, and then rerendering the new points and drawn route back on the visible map so it looks like the route was cleared and then redrawn from point 0.

```javascript
removeAll() {
    if(this.markers.length === 0) return;
    this.markers.forEach(marker => {
        marker.setMap(null)
    })
    this.markers = [];
    this.directionsDisplay.setMap(null);
    this.reset = true;
    this.setState({ duration: 0, distance: 0, lastDurationLeg: 0, lastDistanceLeg: 0 })
}
```

# Profile Page

The profile page has a dashboard which collects your totals for all of your walks and displays that information cleanly in an easy to read dashboard.  It also 
uses ReCharts, a graph making library, to display your 5 most recent walks and how far you walked in each of those.  Last but not least, the site currently displays your most recent walk and some key information on the bottom of the screen.

Here's the logo and some graphics that I created!
[logo]: https://github.com/dojobuns/MapMyWalk/blob/master/app/assets/images/mmwlogo.png
[splash]: https://github.com/dojobuns/MapMyWalk/blob/master/app/assets/images/ash_yo_front_page.PNG
[graphic]: https://github.com/dojobuns/MapMyWalk/blob/master/app/assets/images/splash-wonky.png