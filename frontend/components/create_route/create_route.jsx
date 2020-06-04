import React from 'react';
import RouteSideBarContainer from './create_route_items/route_side_bar_container';
import RouteMapContainer from './create_route_items/route_map_container';

class CreateRoute extends React.Component {
    render(){
        return(
        <div className='create-route-component'>
            <RouteSideBarContainer />
            <RouteMapContainer />
        </div>
        )
    }
}

export default CreateRoute;